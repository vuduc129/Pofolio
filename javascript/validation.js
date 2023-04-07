
const Validator = (options)=>{

    const ruleSelector={}
    const validate=(rule,inputElement)=>{
        const errorElement = inputElement.closest(options.formGroup).querySelector(options.errorSelector)
        let errorMessage
        const rules = ruleSelector[rule.selector]
        
        for(let i = 0;i<rules.length;i++){
            errorMessage = rules[i](inputElement.value)
            if(errorMessage) break;
        }
        
        if(errorMessage){
            errorElement.innerText=errorMessage
        }else{
            errorElement.innerText=''
        }

        return !errorMessage
    }

    const formElement = document.querySelector(options.form)
    if(formElement){

        formElement.onsubmit = function(e){


            let formIsValid = true

            options.rules.forEach(rule=>{
                const inputElement = formElement.querySelector(rule.selector)
                let formValid = validate(rule,inputElement)
                if(!formValid){
                    return formIsValid = false
                }
            })

            if(formIsValid){
                let data = {}
                if(typeof options.onSubmit === 'function'){
                    const inputs = formElement.querySelectorAll(options.input)
                    Array.from(inputs).map(input=>{
                        return data[input.id]= input.value
                    })
                }
                options.onSubmit(data)

            }else{
                e.preventDefault()
            }
    
        }

        options.rules.forEach(rule=>{

            if(Array.isArray(ruleSelector[rule.selector])){
                ruleSelector[rule.selector].push(rule.func)
            }else{
                ruleSelector[rule.selector] = [rule.func]
            }

            const inputElement = formElement.querySelector(rule.selector)
            const errorElement = inputElement.closest(options.formGroup).querySelector(options.errorSelector)

            if(inputElement){
                inputElement.onblur=function(){
                    validate(rule,inputElement)
                }
                inputElement.oninput=function(){
                    errorElement.innerText=''
                }
            }
            
        })
    }

}

Validator.isRequired=(selector,message)=>{
    return{
        selector,
        func: (value)=>{
            return value ? undefined : message || 'Please fill this form before send email' 
        }
    }
}

Validator.isEmail = (selector)=>{
    return{
        selector,
        func:(value)=>{
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'This form must be an valid email'
        }
    }
}

Validator.isNumber = (selector)=>{
    return{
        selector,
        func:(value)=>{
            const regex= /^[0-9]*$/
            return regex.test(value) ? undefined : 'This form requires number content only'
        }
    }
}

Validator.lengthRequired = (selector,length)=>{
    return{
        selector,
        func:(value)=>{
            return value.length > length ? undefined : `This form must be longer than ${length} characters!`
        }
    }
}


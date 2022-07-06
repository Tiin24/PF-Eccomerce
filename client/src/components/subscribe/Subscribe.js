/* eslint-disable no-useless-escape */
import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { newSub } from "../../actions"

export default function Subscribe(){

    const dispatch = useDispatch()

    const [input,setInput]= useState({
        name:"",
        mail:"",
        message:""
    })
    const [errors ,setErrors]=useState({})

    function validateEmail(e){
        let errors={}
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.mail.toLowerCase())){
            errors.mail = "Ingrese un email valido"
        }
        return errors
    }

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        })

        setErrors(validateEmail({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    async function handleSubmit(e){
        if(!input.name || !input.mail || !input.message){
            e.preventDefault()
            return alert('Complete todos los campos para subscribirte')
        }else if(errors.mail){
            e.preventDefault()
            return alert("email invalido")
        }else{
            e.preventDefault()
            dispatch(newSub(input))
            alert('subscripcion exitosa');
            console.log(errors)
            console.log(input)
            setInput({
                name:"",
                mail:"",
                message:""
            })
        }
    }

    return(
        <div>
            <a href={"https://www.instagram.com/"}><img src={"https://149440826.v2.pressablecdn.com/wp-content/uploads/2020/03/instagram-png-instagram-png-logo-1455.png"} alt="instagram Link" width="100" height="100"></img></a>
            <a href={"https://www.whatsapp.com/"}><img src={"http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"} alt="whatsapp Link" width="100" height="100"></img></a>
            <div>
                <form onSubmit={e=>handleSubmit(e)}>
                    <p>Nombre</p>
                    <input type="text" value={input.name} name="name" onChange={e=>handleChange(e)}/>
                    <p>email</p>
                    <input type="text" value={input.mail} name="mail" onChange={e=>handleChange(e)}/>
                    {errors.mail?<label>{ errors.mail}</label>:null}
                    <p>mensaje</p>
                    <input type="text" value={input.message} size="100" name="message" onChange={e=>handleChange(e)}/>
                    <div>
                        <button type="submit"> Subscribirte </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
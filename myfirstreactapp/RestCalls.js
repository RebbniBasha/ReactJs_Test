import React from 'react'

export function callToRestApi(user) {
       
    const url = 'http://localhost:8080/spring_curd_ope/rest/validateUser'
    try {
        return {
           //axios.get(url)
                //.then(res => { res.data })
        }
    } catch (error) {
        console.log(error)
    }

console.info("in callToRestApi()")

}


const STATUS_OK = '200'
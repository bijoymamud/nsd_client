import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.172.0.109:3000/'
    }),


    endpoints: (builder) =>({

        //createuser
        createUser: builder.mutation({
            query: (userData) =>({
                url: "api/auth/register/",
                method: "POST",
                body: userData
            })
        }),

        //login user
        userLoin: builder.mutation({
            query: (loginData)=>({
                url: "api/auth/login/",
                method: "POST",
                body: loginData
            })
        }),

    })
})




export const {

    // authentication
    useCreateUserMutation,
    useUserLoinMutation,

} = baseApi
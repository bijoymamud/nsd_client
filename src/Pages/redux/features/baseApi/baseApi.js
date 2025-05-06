import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.172.0.109:3000/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
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

        // loggedin user info
        loggedinUserInfo: builder.query({
           query: ()=> "api/auth/profile/"
        }),

        //forgetpass
        otpCreate: builder.mutation({
            query: (email)=>({
                url: "api/auth/otp/create/",
                method: "POST",
                body: email
            })
        }),


    })
})




export const {

    // authentication
    useCreateUserMutation,
    useUserLoinMutation,
    useLoggedinUserInfoQuery,

    //otp creation
    useOtpCreateMutation,

} = baseApi
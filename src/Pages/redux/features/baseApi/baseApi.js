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

        //otp verification
        otpVerification: builder.mutation({
            query: ({otp, email})=>({
                url: "api/auth/otp/verify/",
                method: "POST",
                body: {otp, email}
            })
        }), 

        //resend pass
        resendPass: builder.mutation({
            query:(email)=>({
                url: "api/auth/password-reset/request/",
                method: "POST",
                body: email
            })
        }),

        //resetpass
        resetPass: builder.mutation({
            query: (payload)=>({
                url: "api/auth/password-reset/confirm/",
                method: "POST",
                body: payload 
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

    //otp verification
    useOtpVerificationMutation,

    //reset pass
    useResetPassMutation,

    //resend pass
    useResendPassMutation,

} = baseApi
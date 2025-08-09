/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSentOtpMutation, useVerifyOtpMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";


const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

const Verify = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.state);
    const [email] = useState(location.state)
    const [confirmed, setConfirmed] = useState(false)
    const [sendOtp] = useSentOtpMutation()
    const [verifyOtp] = useVerifyOtpMutation()

    useEffect(() => {
        if (!email) {
            navigate('/')
        }
    }, [email])



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

   

    const handleConfirmed = async () => {
        try {
         const loadingId = toast.loading('sending OTP...')
            const res = await sendOtp({ email: email }).unwrap()
            
            if (res.success) {
                toast.success("OTP sent to your email", {id : loadingId})
                setConfirmed(true)
            }

        } catch (error) {
            console.log(error);
        }

    }

     const onSubmit = async(data: z.infer<typeof FormSchema>) => {
       const userInfo = {
        email,
        otp : data.pin
       }
       try {
         const loadingId = toast.loading('Verifying OTP...')
            const res = await verifyOtp(userInfo).unwrap()
            
            if (res.success) {
                toast.success("OTP Verified", {id : loadingId})
            }
           

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="grid place-content-center h-screen">
            {
                confirmed ?
                    <Card>
                        <CardHeader>
                            <CardTitle>Verify your email adrress</CardTitle>
                            <CardDescription>Please enter the 6 digit code we sent to <span className="text-blue-500">{email}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={form.control}
                                        name="pin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>One-Time Password</FormLabel>
                                                <FormControl>
                                                    <InputOTP maxLength={6} {...field}>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={0} />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={1} />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={2} />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={3} />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={4} />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup>
                                                            <InputOTPSlot index={5} />
                                                        </InputOTPGroup>
                                                    </InputOTP>
                                                </FormControl>
                                                <FormDescription>
                                                    Please enter the one-time password sent to your email.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button className="mt-3 cursor-pointer text-white" type="submit">Submit</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card> : <Card className="w-[400px]">
                        <CardHeader>
                            <CardTitle>Please enter the confirm button to sent an OTP at <span className="text-blue-500">{email}</span></CardTitle>
                            <Button onClick={handleConfirmed} className="w-[300px] mt-4 text-white cursor-pointer">Confirm</Button>
                        </CardHeader>
                    </Card>
            }


        </div>

    );
};

export default Verify;
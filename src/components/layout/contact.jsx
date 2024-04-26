"use client"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import { Input } from "@/components/ui/input"

export default function Contact() {
    const [selectedSubject, setSelectedSubject] = useState('');


    const handleSubjectChange = (value) => {
        setSelectedSubject(value);
    };

    return (
        <div>
            <form className={"text-white"}>
                <h1 className={"font-bold text-sm lg:text-xl pb-3"}>Contact me !</h1>
                <p>Your email</p>
                <Input type={"email"} id="email" className={"border-0 bg-gray-800 my-2"} placeholder={"Email"}/>
                <div className={"my-5"}>
                    <p className={"text-xs lg:text-sm"}>Subject of your mail</p>
                    <Select onValueChange={handleSubjectChange}>
                        <SelectTrigger className="w-[180px] border-0 rounded my-2 bg-gray-800">
                            <SelectValue placeholder="Choose a subject"/>
                        </SelectTrigger>
                        <SelectContent className={"bg-gray-800 text-white border-0"}>
                            <SelectItem value="order_issue">Information</SelectItem>
                            <SelectItem value="complaint">Job</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className={"my-5"}>
                    <p className={"text-xs lg:text-sm py-2"}>Mail body</p>
                    <Textarea
                        className={"w-full border-0 bg-gray-800 max-h-[100px] min-h-[100px] rounded resize-none"}
                        placeholder="Entrez votre message ici."
                    />
                </div>
                <div className={"text-center text-gray-300 italic text-xs"}>
                    <p>My email: john@email.com</p>
                </div>
            </form>
        </div>
    )
}
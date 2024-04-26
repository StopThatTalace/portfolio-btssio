"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import {project3} from "@/components/layout/articles/project-3";
import ProjectCarouselContent from "@/components/layout/carousel/ProjectCarouselContent";
import {project4} from "@/components/layout/articles/project-4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {project1} from "@/components/layout/articles/project-1";
import {project5} from "@/components/layout/articles/project-5";
import {project2} from "@/components/layout/articles/project-2";

export default function ProjectComp() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={"mx-auto w-full bg-gradient-to-t from-blue-800 to-blue-950 h-[500px] text-white"}>
            <div data-aos="zoom-in" data-aos-delay="300">
                <h1 className={"pt-32 pb-4 text-2xl md:text-3xl font-bold text-center items-center flex justify-center"}>
                    <p className={"mr-2"}>Recent projects</p>
                    <span className={"text-gray-400 font-thin text-sm"}>(swipe right/left)</span>
                </h1>
                <Carousel className={"max-w-6xl mx-auto w-full"}>
                    <CarouselContent className="-ml-6 max-w-xl h-[200px] w-[400px] gap-5">
                        <CarouselItem className="pl-0 rounded-lg bg-[url('/projects/jumbo.jpg')] bg-no-repeat bg-cover bg-center">
                            <ProjectCarouselContent url={"https://github.com/"} list={project4}/>
                        </CarouselItem>
                        <CarouselItem className="pl-0 rounded-lg bg-[url('/projects/fastsushi-bg.png')] bg-no-repeat bg-cover bg-center">
                            <ProjectCarouselContent url={"https://github.com/"} list={project3}/>
                        </CarouselItem>
                        <CarouselItem className="pl-0 rounded-lg bg-[url('/projects/DevOps.jpg')] bg-no-repeat bg-cover bg-center">
                            <ProjectCarouselContent url={"https://github.com/"} list={project1}/>
                        </CarouselItem>
                        <CarouselItem className="pl-0 rounded-lg bg-[url('/projects/kotlin-bg.png')] bg-no-repeat bg-cover bg-center">
                            <ProjectCarouselContent url={"https://github.com/"} list={project5}/>
                        </CarouselItem>
                        <CarouselItem className="pl-0 rounded-lg bg-[url('/projects/spy-docker.png')] bg-no-repeat bg-cover bg-center">
                            <ProjectCarouselContent url={"https://github.com/"} list={project2}/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext className={"right-3 sm:right-2 md:right-1 text-black size-10"}/>
                    <CarouselPrevious className={"left-3 sm:left-2 md:left-1 text-black size-10"}/>
                </Carousel>
            </div>
        </div>
    )
}
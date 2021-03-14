import React, { useState, useEffect } from 'react';
import Navigation from './navigation';
import { Header } from './header';
import { Features } from './features';
import { About } from './about';
import { Services } from './services';
import { Gallery } from './gallery';
import { Testimonials } from './testimonials';
import { Projects } from './Projects';
import { Contact } from './contact';
import $ from 'jquery';

interface IResumeData{
    Header?:any,
    About?:any,
    Team?:any,
    Services?:any,
    Contact?:any,
    Features?:any,
    Testimonials?:any
}
export const App =()=> {
  const [resumeData, setResumeData] = useState<IResumeData>({});
  const getResumeData =()=> {
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data:any){
        setResumeData({...data});
      },
      error: function(xhr:any, status:any, err:any){
        console.log(err);
        alert(err);
      }
    });
  }
  useEffect(()=>{
    getResumeData()
  },[])

    return (
      <div>
        <Navigation />
        <Header data={resumeData.Header}/>
        <Features data={resumeData.Features}/>
        <About  data={resumeData.About}/>
        <Services  data={resumeData.Services}/>
        <Gallery />
        <Testimonials  data={resumeData.Testimonials}/>
        <Projects  data={resumeData.Team}/>
        <Contact  data={resumeData.Contact}/>
      </div>
    )
  }


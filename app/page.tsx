import CompanionCard from "@/components/companionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
const Page = () => {
  return (
    <main>
    <h1 className="text-2xl underline ">Popular Companion cards</h1>
     <section className="home-section">
      <CompanionCard 
      id="1"
      name="Neura the brainy explorer"
      topic = "Neural networks of brain"
      subject = " science "
      duration = {60}
      color = "#CB99F7"
      />
      <CompanionCard 
      id="18"
      name="Neura the brainy explorer"
      topic = "Neural networks of brain"
      subject = " English "
      duration = {45}
      color = "#D1F799"
      />
      <CompanionCard 
      id="134"
      name="Neura the brainy explorer"
      topic = "Neural networks of brain"
      subject = " Maths "
      duration = {30}
      color = "#a8a29e"
      />
      
     </section> 
     <section className="home-section">
      <CompanionList 
      title="Recently completed sessions"
      companion = {recentSessions}/>
      <CTA/> 
     </section>
     
     

    </main>
     
    
  );
};

export default Page;
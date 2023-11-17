"use client"
import {subtitle, title} from "@/components/primitives";
import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {CheckLogo} from "@/components/icons"
import { color } from "framer-motion";

export default function AboutPage() {
	let tabs = [
		{
			id: "Assurance vie",
			label: "Assurance vie",
			content: " L'assurance vie, vous permet dépargnée sens avoir à payée d'impot. Il y a aujourd'hui 18 million de contrat d'assurenc vie en france."
		},
		{
			id: "Assurance décès",
			label: " Assurance décès ",
			content: "L'assurance décès, vous vous inquitez de pour votre famille dans le future, lors que vous ne serez plus la souscriver a une assurance décès. Vous cotiserez une somme qui sera remis aux personnes de votre choix. Il ya 5,7 millions de presonne on une assurance décès en france "
		},
		{
			id: "Assurance mix",
			label: "Assurance mix",
			content: "Cette assurance est une combinaissont entre  l'assuance vie et l'assurance décès. Vous permetant ainsi d'économiser deux fois plus "
		},
		
	];   
 
   
     
 
	
	
  return(
  <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
        <div className="flex items-center justify-center">
					<h1 className={title( { color: "yellow"} )}>  Nos assurances </h1>
			  </div>
      <h2 className=" text-left text-xl text-white/80 mt-2"> Pourquoi souscrire a une ou plusieur chez Filine ? </h2>
				<p className="my-4 text-left">
					Prendre pour une ou plusieur assurances chez nous , c'est choisir la sécuritée de vos biens. Voici quelques raisons qui font de Filine un choix judicieux pour vos besoins d'assurances :
				</p>
			</div>

   
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
      
      <div className="flex">
      <Image
      className="mr-3"
      width={300}
      src="./insurance.png"
      />
    </div>

        
  </section>
        )

}

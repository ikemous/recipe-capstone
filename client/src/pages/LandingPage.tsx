import React from "react";
import PageContainer from "../components/PageContainer";
import QueryForm from "../components/QueryForm";
import AightUserAuthenticationForm from "../components/AightUserAuthenticationForm";

function LandingPage() {
  return (
    <PageContainer>
      <AightUserAuthenticationForm />
       <QueryForm />
       <div>
         <h2>Search For Recipes!</h2>
         <p>
           You can either search from the home page or click the search page! Think of an ingredient or 
           food choice and discover some delicious meals!
         </p>
       </div>
       <div>
         <h2>Save Favourites!</h2>
         <p>
           Found something you like but not hungry yet? Click the heart and save it for later!
           You'll need to be logged in. Not Logged in? Create and account!
         </p>
       </div>
       <div>
         <h2>Save Your Own Recipes!</h2>
         <p>
           Know of some recipes but dont want to write them on paper? Create your recipe and save it for later!
           You'll need to be logged in. Not Logged in? Create and account!
         </p>
       </div>
    </PageContainer>
  );
};

export default LandingPage;

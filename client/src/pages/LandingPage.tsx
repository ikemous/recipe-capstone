import React from "react";
import PageContainer from "../components/PageContainer";
import QueryForm from "../components/QueryForm";

function LandingPage() {
  return (
    <PageContainer>
       <QueryForm />
       <div>
         <h2>Search For Recipes!</h2>
       </div>
       <div>
         <h2>Save Favourites!</h2>
       </div>
       <div>
         <h2>Save Your Own Recipes!</h2>
       </div>
    </PageContainer>
  );
};

export default LandingPage;

import React from "react";

const SPChallenges = ({ challenge }) => {
   return (
      <article className="single-project-info__challenges">
         <h3> What I found challenging </h3>
         <hr />
         <p> {challenge}</p>
      </article>
   );
};

export default SPChallenges;

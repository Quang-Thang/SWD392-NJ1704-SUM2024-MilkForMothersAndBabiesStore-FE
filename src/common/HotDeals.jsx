import React from "react";

const images = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/f047/e14f/3627529202279b150370dba82ceacf72?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9eUxCoD0T79kY2k0XvFZ-yuWmqaH3uz3l2PAjU1QfCyTY15zjmFD0NIj-xsxjz9mt2LwF5DbALlYfUEjOiQ5cCQwa2GP9mprzzMVwbmyydjhPosVcrMpkJGLY2j2UKjuodqTRL10NLC8RPse~zyZM2oJLAAAxDAQpIIlKmgInJg2QCDYFJtvHDAP2Q8c2GkQM~ES7FGFsCWii48bmCDJr0R5OJY1S9Ay~rP3nae77b8we08u1x4vfD7yVvBENNVdMPgPCK6aGBsSBs6eL1RsbOrlJ62lmziWYRvYYFATb434AZxBToa611talTRcfiGi3aCoHiX7YVBYf-tsIJtZg__",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/9b22/7279/aea63cc61f8c199453007c7dd0044185?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y15v32DvBkpwre-4O1RRpe26zC1rQgfrnXJ6qoy60kP~b09qGcKhrjJoMeG2oQiUzBKmrEZAd486KKB45Fl~KsNfU3~p0QM4~MJprlCXWvwMg4XPkSl97kEAA3agKqhJvlHXR5jdFvdeuz5uhw14kOJf1nQWbFnb~yLsyBFRwMP9kcJFxw1yYpkcJdNcW9x9Tr7i9Ds62q7~CFWRmGpD8iQgetmC~FGQc~2RsNhUW1GdBA2Xjx4B-wr-c-czl9r9X-LPl9W8mEM6in4KG5Ybm-MPuvgB4GNnXshBrX8XcRhw2kVkXgd6swhzroAYg2Xn5oE7SjRu~m1DDD7y3wvpZg__",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/0f82/67f4/53be85e8a088f7141ae5ee48f3ed779b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B~PKNUSl3R09iQGpEqmzDE3JOM5edqIYCyQYVIfWXVTm6ffMOEPzI~iW5WShvnQ7WTNsaDtWTOx7p1N9fKWjuH~nsuGmnldEMLa0YgcCLW5oxW5dCZQSu5nE70N8w38qM42ZHDxdB2dbF4FovIyTP8~rcmWdyX0fxO71oIAvDN~HMox-jRwWtCIBioioIRxCitvYG-jMEM-MG45Ib9XVwlBlGjE65n6bxrbCmFe4Sba-9weRf~sv-JiEEBGyKoQmLgWjeYygvZ~5UrsW5nHiII7rBclc94NWfve4~FsKDgr~UzKdG2KGBHilqYtzFDftIQENZboFVZCmrCL9SPdd8Q__",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/bf1f/a955/753a259f18ed176721210e37ca809cf4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GO5c1fTFT5e~yaUHIJci2EgWNve09c~gCj0GNmIlQzK1cekayzVYp5ddg~IEODcMAxVswSD~hB-LozHl8Xk~~El3ArZq5BS0i-lUsTm7g1OnFFgl9PTgdP8iQs2kLK3ThydF685Z53TskmlUlRReaFW42OePiMHIaeIXCy-sqFqpS9O5N8HZEsnDJ7A7pdXQcwh8I5hf9qLJmouZrnf5oPGLl2rCLhJxB~oB2kRvCJK4XqcN4DO9ooXcHb7u-no9oywBa~5hdRsPl4tyAPzoT-dnxyWKBakTOnGmZMOgUNbZfTtGsO5d0LQBXj0HmRl1DQfSCFs~xU44-~rTL7fjPw__",
  },
];
const HotDeals = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-16">
        {images.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default HotDeals;

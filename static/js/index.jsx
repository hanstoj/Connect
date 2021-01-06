
function interestContainer(props) {
    const interests = [];

    for (const currentInterest of interestData) {
      interests.push(
        <Interest
          name={currentInterest.name}
          interestLevel={currentInterest.interestLevel}
          imgUrl={currentInterest.imgUrl}

        />
      );
    }

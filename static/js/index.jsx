const interestData= [
{
    name: 'Shopping',
    interestLevel: '2',
    imgUrl: 'static\img\freestocks-yqBKaF1KecM-unsplash.jpg'
  },

  {
    name: 'Travel',
    interestLevel: '6',
    imgUrl: 'static\img\cameron-venti-I1EWTM5mFEM-unsplash.jpg'
  },

  {
    name: 'Running',
    interestLevel: '9',
    imgUrl: 'static\img\cameron-venti-I1EWTM5mFEM-unsplash.jpg'
  }
];





function interests(props) {
    return (
      <div className="interests">
        <h2>{props.name}</h2>
        <img src={props.imgUrl} />
        <h2> interest level {props.interestLevel}</h2>
      </div>
    );
  }


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

    return (
        <React.Fragment>
          {interests}
        </React.Fragment>
      );
    }
    ReactDOM.render(
        <interestContainer />,
        document.getElementById('interests')
      );

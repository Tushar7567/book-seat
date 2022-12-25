import styled from "@emotion/styled";
import EventSeat from "@mui/icons-material/EventSeat";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-top: 3px;
  width: 100vw;
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubContainer = styled.div`
  width: 50%;
  height: 85%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 30%;
  height: 95%;
  margin: 10px 15px;
  display: grid;
  grid-template-columns: auto auto;
`;
const SeatCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.status === "booked" && "red"}

`;
const SeatNbr = styled.div`
  color: black;
  font-size: 16px;
`;
const ParentBottom = styled.div`
  width: 50%;
  height: 9%;
  background-color: white;
`;

const Bottom = styled.div`
  margin: 0px 6rem;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
`;
const P = styled.span`
  color: white;
  font-size: 13px;
`

const Body = () => {
  const n = 12;

  const [getSeat, setGetSeat] = useState([]);

  


  const fetchData = async() =>{
    await axios
      .get("https://book-seat-api.onrender.com/reserve", {
        withCredentials: true,
      })
      .then((res) => {
        setGetSeat(res.data);
        // changeColorAfterReleased()
        // window.alert("Seat Booked");
        // changeColor(e);
      })
      .catch((err) => {
        window.alert("Sorry unable to load");
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
    console.log("1")
  }, []);

  const changeColor = (e,item) => {
    if ((item === "booked")) {
    //   e.currentTarget.style.color = "red";
      e.target.style.color = "red";
      console.log('red')

    } else {
    //   e.currentTarget.style.color = "red";
      e.target.style.color = "black";
      console.log('black')
    }
  };

  // const changeColorAfterReleased = (e) => {
  //   getSeat.forEach((item)=>{
  //     if (item.status === "booked") {
  //       //   e.currentTarget.style.color = "red";
  //         e.target.style.color = "red";
  //         console.log('red')
    
  //       } else {
  //       //   e.currentTarget.style.color = "red";
  //         e.target.style.color = "black";
  //         console.log('black')
  //       }
  //   })
  // };

  console.log(getSeat);
  // const arr = [];
  const handlebooked = async (e,item) => {
    e.preventDefault();

    // const arr = [...selectedSeat];
    // arr.push(e.currentTarget.id);
    // setSelectedSeat(...arr);
    // arr.push(e.currentTarget.id);

    const data = e.currentTarget.id;

    await axios
      .post(
        "https://book-seat-api.onrender.com/reserve/:id",
        {
          data,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        window.alert(res.data.msg);
        // setGetSeat(res.data.data)
        changeColor(e,res.data.status);
      })
      .catch((err) => {
        window.alert(`${err}`);
        console.log(err);
      });
    // setSelectedSeat(...selectedSeat, e.currentTarget.id)
  };






  // console.log(selectedSeat);
  // console.log(arr);
//   console.log("here");

  return (
    <Container>
      <P>* "Red" means Unavailable</P>
      <P>* "Black" means Available ( * after clicking on a seat please wait for a minute )</P>
      <SubContainer>
        <Left>
          {getSeat.slice(0,n).map((item, index) => {
            return (
              <SeatCont key={index + 1} status={item.status} id={index + 1} onClick={(e)=>handlebooked(e)}>
                <EventSeat  ></EventSeat>
                <SeatNbr>{`A${index + 1}`}</SeatNbr>
              </SeatCont>
            );
          })}
        </Left>
        <Left>
          {getSeat.slice(n,n+12).map((item, index) => {
            return (
              <SeatCont key={13 + index} status={item.status} id={13 + index} onClick={handlebooked}>
                <EventSeat></EventSeat>
                <SeatNbr>{`A${13 + index}`}</SeatNbr>
              </SeatCont>
            );
          })}
        </Left>
      </SubContainer>
      <ParentBottom>
        <Bottom>
          {getSeat.slice(24).map((item, index) => {
            return (
              <SeatCont key={25 + index} status={item.status} id={25 + index} onClick={handlebooked}>
                <EventSeat></EventSeat>
                <SeatNbr>{`A${25 + index}`}</SeatNbr>
              </SeatCont>
            );
          })}
        </Bottom>
      </ParentBottom>
    </Container>
  );
};

export default Body;

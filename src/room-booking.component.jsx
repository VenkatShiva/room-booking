import group from './images/group.png';
import room from './images/room.png';
import adult from './images/adult.png';
import child from './images/child.png';
import plus from './images/plus.png';
import minus from './images/minus.png';

const RoomBooking = () => {
  return 
    <div className="room">
      <div className="header">
        <img src={group} alt="room icon" className="room-icons" />
        <p>
          Choose number of <span className="bolder">people</span>
        </p>
      </div>
      <div className="fields">
        <div className="each-feild">
          <div className="field-type-header">
            <img src={room} alt="room icon" className="room-icons" />
            <p>ROOMS</p>
          </div>
          <div className="operations">
            <button className="icon-button minus" disabled = {true}>
              <img src={minus} alt="room icon" className="room-icons" />
            </button>
            <p className="count">1</p>
            <button className="icon-button plus">
              <img src={plus} alt="room icon" className="room-icons" />
            </button>
          </div>
        </div>
        <div className="each-feild">
          <div className="field-type-header">
            <img src={adult} alt="room icon" className="room-icons" />
            <p>ADULTS</p>
          </div>
          <div className="operations">
            <button className="icon-button minus">
              <img src={minus} alt="room icon" className="room-icons" />
            </button>
            <p className="count">1</p>
            <button className="icon-button plus">
              <img src={plus} alt="room icon" className="room-icons" />
            </button>
          </div>
        </div>
        <div className="each-feild">
          <div className="field-type-header">
            <img src={child} alt="room icon" className="room-icons" />
            <p>CHILDREN</p>
          </div>
          <div className="operations">
            <button className="icon-button minus">
              <img src={minus} alt="room icon" className="room-icons" />
            </button>
            <p className="count">1</p>
            <button className="icon-button plus">
              <img src={plus} alt="room icon" className="room-icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;

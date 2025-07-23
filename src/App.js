/*************************************************************
 * This application allows users to personalize their matrix LED display by selecting
 * different themes, colors, and light styles. It's designed to provide a user-friendly
 * interface for configuring LED displays according to user preferences.
 * 
 * The application utilizes React.js for front-end development, providing dynamic
 * interaction and state management. Dropdown menus are implemented using the react-select
 * library, allowing users to select from predefined options for themes, colors, and light styles.
 * 
 * The JavaScript component of the application handles user interactions, such as selecting
 * options from the dropdown menus and submitting the chosen configuration to the MQTT broker.
 * Event handlers are used to capture user input and update the application state accordingly.
 * 
 * Upon selection, the chosen options are sent to an MQTT broker using the mqtt library.
 * MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol commonly
 * used for communication in IoT (Internet of Things) applications. In this context, the
 * MQTT broker serves as an intermediary between the web application and an Arduino
 * microcontroller connected to the LED display. The selected options are published to
 * a specific topic on the MQTT broker, from where the Arduino subscribes to receive
 * the configuration data and update the LED display accordingly.
 * 
 * The MQTT connection is established over WiFi, allowing the web application to communicate
 * with the MQTT broker via the internet. The application uses secure WebSocket (wss) connections
 * to connect to the MQTT broker, ensuring data privacy and integrity during transmission.
 * 
 * MQTT clients, implemented in JavaScript, are used to establish connections to the MQTT broker.
 * When the web application publishes data to the MQTT broker, it creates a message containing
 * the selected options and sends it to a designated topic. MQTT clients subscribed to that topic,
 * such as the Arduino microcontroller, receive the published data and process it accordingly,
 * updating the LED display to reflect the user's preferences.
 * 
 * This application also includes an account creation feature, allowing users to register
 * and store their preferences for future use. User authentication is performed on the
 * front end, with basic validation checks for username length and existing usernames.
 * 
 * Developed by Lidi Cala. 
 *************************************************************/



// Importing necessary styles and libraries
import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';// Importing a component for dropdown menus
import mqtt from 'mqtt';// Importing the MQTT library for communication with a broker

// Defining the options for the first select tag
const options = [
  { value: '1', label: 'Happy Birthday' },
  { value: '2', label: 'Happy New Year' },
  { value: '3', label: 'Congratulations' }
]
// Defining the options for my second select tag
const options2 = [
  { value: '1', label: 'Blue' },
  { value: '2', label: 'Red' },
  { value: '3', label: 'Green' }
]
// Defining the options for my second select tag
const options3 = [
  {value: '1', label: 'Steady light'},
  {value: '2', label: 'Static light'}
]

// Mock database of existing usernames
const existingUsernames = ['admin', 'user', 'test'];

// Defining main component
function App() {
  // Here I will the variables that are going to store my selected values
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  // State for showing the account creation form
  const [showAccountCreation, setShowAccountCreation] = useState(true);
  // State for storing account details
  const [accountDetails, setAccountDetails] = useState(null);
  const [confirmationMsg, setConfirmationMsg] = useState('');


  // this component will set the first variable selected
  const handleChange1 = (event) => {
    setSelectedValue(event.value);
  };
  // this component will set the second variable selected
  const handleChange2 = (event) => {
    setSelectedValue2(event.value);
  };

  const handleChange3 = (event) => {
    setSelectedValue3(event.value);
  };
  // this component will publish the data to the broker/topic

  const pulishmsg = () => {
    //Connecting to the broker
    const client = mqtt.connect(process.env.REACT_APP_MQTT_BROKER, {
    username: process.env.REACT_APP_MQTT_USER,
    password: process.env.REACT_APP_MQTT_PASS
});


  client.on('connect', () => {
    console.log('Connected!');
    const message = `${selectedValue},${selectedValue2},${selectedValue3}\n`;

    client.publish('esp8266_data', message, {}, (err) => {
      if (!err) {
        setConfirmationMsg('Your LED has been successfully configured!');
      } else {
        setConfirmationMsg('Failed to send configuration. Please try again.');
      }
    });
  });
  client.on('error', (err) => {
    console.error('MQTT error:', err);
    setConfirmationMsg('There was an error connecting to the MQTT broker.');
  });
};

  // Function to handle account creation
  const handleCreateAccount = (username, password) => {
    // Validate username
    if (!username || username.length < 5) {
      alert("Username must have at least 5 characters.");
      return;
    }
    if (existingUsernames.includes(username)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    // Create account
    const account = createAccount(username, password);
    // Set account details
    setAccountDetails(account);
    // Hide account creation form
    setShowAccountCreation(false);
  };

  return (
    <div className="mainContainer">
      {showAccountCreation ? (
        <AccountCreationForm onCreateAccount={handleCreateAccount} />
      ) : (
        <>
          <div className='inputContainer'>
            <h2>Choose your theme</h2>
            <Select onChange={handleChange1} options={options} />
          </div>
          <div className='inputContainer'>
            <h2>Choose your color</h2>
            <Select onChange={handleChange2} options={options2} />
          </div>
          <div className= 'inputContainer'>
            <h2>Choose you light mode</h2>
            <Select onChange={handleChange3} options={options3} />
          </div>
          {/* <div className='buttonContainer'>
            <button onClick={pulishmsg}>Submit</button>
          </div> */}
          <div className='buttonContainer'>
          <button onClick={pulishmsg}>Submit</button>
          {confirmationMsg && (
          <div className="modal">
            <div className="modal-content">
              <h3>{confirmationMsg}</h3>
            <button onClick={() => setConfirmationMsg('')}>OK</button>
        </div>
        </div>
)}

          </div>
        </>
      )}
    </div>
  );
}



// Account Creation Form Component
function AccountCreationForm({ onCreateAccount }) {
  // State for storing input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username
    if (!username || username.length < 5) {
      alert("Username must have at least 5 characters.");
      return;
    }

    onCreateAccount(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
}

// Account Class and createAccount function 
class Account {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

function createAccount(username, password) {
  // Validate password
  let validPassword = false;

  while (!validPassword) {
    if (!password) {
      password = prompt("Password cannot be empty. Please enter a password:");
    } else if (password.length < 7 || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      password = prompt("Invalid password. Password must have at least 7 characters and contain at least one symbol. Enter a new password:");
    } else {
      validPassword = true;
    }
  }

  // Returning new Account
  return new Account(username, password);
}


export default App;

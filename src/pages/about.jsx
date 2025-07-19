import React, { useEffect, useState } from 'react';

/*function About() {
  const [users, setUsers] = useState([]);       // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track error state

  useEffect(() => {
    //fetch('https://testproject.co.in/api/apiforapp/v1/wallet/add-money') // Sample API
    fetch('https://jsonplaceholder.typicode.com/users') // Sample API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once on mount

return <>
    <div className="container px-lg-5">
    <h4>User List from api</h4>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
      </div>
  </>
}*/



function About() {



  
  const [userRegID, setUserRegID] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [requestForm, setRequestForm] = useState('');
  const [bankName, setBankName] = useState('');
  const [transactionID, setTransactionID] = useState('');
  const [paymentBy, setPaymentBy] = useState('');
  const [depositDate, setDepositDate] = useState('');
  const [remarks, setRemarks] = useState('');

  const [responseData, setResponseData] = useState(null);
  //const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  // const [users, setUsers] = useState([]);       // Store fetched data
  // const [loading, setLoading] = useState(true); // Track loading state

  // useEffect(() => {
  //   //fetch('https://testproject.co.in/api/apiforapp/v1/wallet/add-money') // Sample API
  //   fetch('https://jsonplaceholder.typicode.com/users') // Sample API
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not OK');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if(!userRegID) newErrors.userRegID = 'Enter user registration ID';
    if (!type) newErrors.type = 'Enter type';
    if (!amount) newErrors.amount = 'Enter amount';
    if (!requestForm) newErrors.requestForm = 'Enter request form';
    if (!bankName) newErrors.bankName = 'Enter bank name';
    if (!transactionID) newErrors.transactionID = 'Enter transaction ID';
    if (!paymentBy) newErrors.paymentBy = 'Enter payment method';
    if (!depositDate) newErrors.depositDate = 'Enter deposit date';
    if (!remarks) newErrors.remarks = 'Enter remarks';
      
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const token = '25|9QLLMryDLgU5ZHxCLvlbLAxwY5zuoyBhZM1Jn0mjb5671de4'; 
    try {
      const response = await fetch('https://testproject.co.in/api/apiforapp/v1/wallet/add-money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Adding the Bearer token to the Authorization header
        },
        body: JSON.stringify({
          userRegID: userRegID,
          type: type,
          type: type,
          amount: amount,
          requestForm: requestForm,
          bankName: bankName,
          transactionID: transactionID,
          paymentBy: paymentBy,
          depositDate: depositDate,
          remarks: remarks,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="container-fluid header position-relative overflow-hidden p-0">
      <div className="hero-header overflow-hidden px-5">          
            <form onSubmit={handleSubmit}>
              <div className="row gy-5 align-items-center">
                <h4>Post Data Example</h4>
              <div className="col-lg-6 wow fadeInLeft">
                <input className="form-control mb-2" type="text" value={userRegID} placeholder="Enter Reg no" onChange={(e) => setUserRegID(e.target.value)}/>
                {errors.userRegID && (<p> {errors.userRegID}</p> )}
                <select value={type} className="form-control mb-2" onChange={(e) => setType(e.target.value)}>
                  <option value=""> Select type </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                {errors.type && (<p> {errors.type}</p> )}

                <input className="form-control mb-2" type="text" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
                {errors.amount && (<p> {errors.amount}</p> )}
                
                <input className="form-control mb-2" type="text" value={requestForm} placeholder="Enter Request Form" onChange={(e) => setRequestForm(e.target.value)}/>
                {errors.requestForm && (<p> {errors.requestForm}</p> )}
              </div>
              <div className="col-lg-6 wow fadeInRight">
                <input className="form-control mb-2"type="text" value={bankName} placeholder="Enter bank name" onChange={(e) => setBankName(e.target.value)}/>
                {errors.bankName && (<p> {errors.bankName}</p> )}

                <input className="form-control mb-2" type="text" value={transactionID} placeholder="Enter transaction ID" onChange={(e) => setTransactionID(e.target.value)}/>
                {errors.transactionID && (<p> {errors.transactionID}</p> )}

                <input className="form-control mb-2"type="text" value={paymentBy} placeholder="Enter payment by" onChange={(e) => setPaymentBy(e.target.value)}/>
                {errors.paymentBy && (<p> {errors.paymentBy}</p> )}

                <input className="form-control mb-2" type="text" value={depositDate} placeholder="Enter deposit date" onChange={(e) => setDepositDate(e.target.value)}/>
                {errors.depositDate && (<p> {errors.depositDate}</p> )}

                <input className="form-control mb-2" type="text" value={remarks} placeholder="Enter remarks" onChange={(e) => setRemarks(e.target.value)}/>
                {errors.remarks && (<p> {errors.remarks}</p> )}

              </div>
              <button type="submit" className='btn btn-primary mb-4'>Send</button>
              {/* <div className="">
              <h4>User List from api</h4>
              <ul>
                {users.map(user => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> - {user.email}
                  </li>
                ))}
              </ul>
              </div> */}
              </div>
            </form>


          {responseData && (
            <>
              <h3>Response:</h3>
              {/* <pre>{JSON.stringify(responseData, null, 2)}</pre> */}
            
              <table className="table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(responseData.data).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{String(value)}</td>

                      {/* {Object.entries(value).map(([key, tt]) => (
                        <td>{String(tt)}</td>
                      ))} */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}


          
      </div>
    </div>
    </>
  );
}

export default About;
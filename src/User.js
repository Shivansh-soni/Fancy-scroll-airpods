import { React, useState } from "react";

const User = () => {
  const [person, setPerson] = useState({ firstName: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };

      setPeople([...people, newPerson]);

      setPerson({ firstName: "", age: "" });
    }
  };
  return (
    <>
      <article>
        <form className="form-main" onSubmit={handleSubmit}>
          <div className="form-items">
            <label htmlFor="Name">NAME</label>
            <input
              type="text"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-items">
            <label htmlFor="Age">Age</label>
            <input
              type="text"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn " onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>

        {people.map((person) => {
          console.log(person);
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default User;

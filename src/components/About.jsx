import React from "react";


const About = () => {
    const dropDownName = [
        { id: 1, name: 'volvo' },
        { id: 2, name: 'saab' },
        { id: 3, name: 'mercedes' },
        {id:4,name:'audi'},
    ]
  return (
    <div className="pt-40">
      <h4>this is About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        officiis odit animi in, minus ad labore id. Labore, hic corporis
        cupiditate modi doloribus dignissimos. Veritatis ipsam non veniam minus
        facilis iste eum laborum at.
          </p>
          
          {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
           */}

      <select name="cars" className="border-[2px] border-[#333] rounded px-2 py-1 outline-none" id="cars">
        {
                  dropDownName.map(({name,id}) => (
                      <option className="" key={id} value={id}>{name}</option>
           ))       
        }
      </select>
    </div>
  );
};

export default About;

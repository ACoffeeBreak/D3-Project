function init(elements) {


  let canvasW = 700;
  let canvasH = 400;

  let margin = 50;
  let w = canvasW - (margin * 2);
  let h = canvasH - (margin * 2);
  let xinc = w / 10;
  let yinc = h / 10;

  let svg = d3.select("body").append("svg")
    .attr("width", canvasW)
    .attr("height", canvasH)
    .style("background-color", d3.color("rgba(255, 0, 0, 0.5)") )
    ;


  let jsonSquirrel;
  let jsonMonkey;
  let jsonBall;
  let jsonSock;
  let jsonDay;

//Sunday
  let jsonSquirrel_Sunday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Sunday";  } );
  let jsonMonkey_Sunday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Sunday";  } );
  let jsonBall_Sunday = elements.filter( e => {  return e.Toy == "Ball" && e.Day == "Sunday";  } );
  let jsonSock_Sunday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Sunday";  } );
  let jsonDay_Sunday = elements.filter( e => {  return e.Day == "Sunday";  } );
//Monday
  let jsonSquirrel_Monday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Monday";  } );
  let jsonMonkey_Monday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Monday";  } );
  let jsonBall_Monday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Monday";  } );
  let jsonSock_Monday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Monday";  } );
  let jsonDay_Monday = elements.filter( e => {  return e.Day == "Monday";  } );
//Tuesday
  let jsonSquirrel_Tuesday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Tuesday";  } );
  let jsonMonkey_Tuesday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Tuesday";  } );
  let jsonBall_Tuesday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Tuesday";  } );
  let jsonSock_Tuesday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Tuesday";  } );
  let jsonDay_Tuesday = elements.filter( e => {  return e.Day == "Tuesday";  } );
//Wednesday
  let jsonSquirrel_Wednesday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Wednesday";  } );
  let jsonMonkey_Wednesday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Wednesday";  } );
  let jsonBall_Wednesday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Wednesday";  } );
  let jsonSock_Wednesday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Wednesday";  } );
  let jsonDay_Wednesday = elements.filter( e => {  return e.Day == "Wednesday";  } );
//Thursday
  let jsonSquirrel_Thursday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Thursday";  } );
  let jsonMonkey_Thursday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Thursday";  } );
  let jsonBall_Thursday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Thursday";  } );
  let jsonSock_Thursday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Thursday";  } );
  let jsonDay_Thursday = elements.filter( e => {  return e.Day == "Thursday";  } );
//Friday
  let jsonSquirrel_Friday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Friday";  } );
  let jsonMonkey_Friday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Friday";  } );
  let jsonBall_Friday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Friday";  } );
  let jsonSock_Friday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Friday";  } );
  let jsonDay_Friday = elements.filter( e => {  return e.Day == "Friday";  } );
//Saturday
  let jsonSquirrel_Saturday = elements.filter( e => {  return e.Toy == "Squirrel" && e.Day == "Saturday";  } );
  let jsonMonkey_Saturday = elements.filter( e => {  return e.Toy == "Monkey" && e.Day == "Saturday";  } );
  let jsonBall_Saturday = elements.filter( e => { return e.Toy == "Ball" && e.Day == "Saturday";  } );
  let jsonSock_Saturday = elements.filter( e => {  return e.Toy == "Sock" && e.Day == "Saturday";  } );
  let jsonDay_Saturday = elements.filter( e => {  return e.Day == "Saturday";  } );

  jsonSquirrel = jsonSquirrel_Sunday;
  jsonMonkey = jsonMonkey_Sunday;
  jsonBall = jsonBall_Sunday;
  jsonSock = jsonSock_Sunday
  jsonDay = jsonDay_Sunday


  let circlesA = svg.selectAll()
    .data(jsonSquirrel)
    .enter() //when we are seeing new Squirrel data for the first time
      .append("circle") //append a circle shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,255,255,0.5)")  )
        .attr("cx", d => { return margin + (d.Enjoyment * xinc); })
        .attr("cy", d => { return canvasH - (margin + (d.Throw * yinc)); })
        .attr("r", 30) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;   

  let circlesB = svg.selectAll()
    .data(jsonMonkey)
    .enter() //when we are seeing new Monkey data for the first time
      .append("circle") //append a circle shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,255,255,0.5)")  )
        .attr("cx", d => { return margin + (d.Enjoyment * xinc); })
        .attr("cy", d => { return canvasH - (margin + (d.Throw * yinc)); })
        .attr("r", 30) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;   
    
  let rectsA = svg.selectAll()
    .data(jsonBall)
    .enter() //when we are seeing new Ball data for the first time
      .append("rect") //append a rect shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(255,0,255,0.5)")  )
        .attr("x", d => { return -30 + margin + (d.Enjoyment * xinc); })
        .attr("y", d => { return -30 + canvasH - (margin + (d.Throw * yinc)); })
        .attr("width", d => { return 60; }) 
        .attr("height", d => { return 60; }) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;    
    
  let rectsB = svg.selectAll()
    .data(jsonSock)
    .enter() //when we are seeing new Sock data for the first time
      .append("rect") //append a rect shape for each data point, and set various attributes based on the data
        .attr("fill", d3.color("rgba(0,0,255,0.5)")  )
        .attr("x", d => { return -30 + margin + (d.Enjoyment * xinc); })
        .attr("y", d => { return -30 + canvasH - (margin + (d.Throw * yinc)); })
        .attr("width", d => { return 60; }) 
        .attr("height", d => { return 60; }) 
        .attr("stroke", d3.color("rgba(0,0,0,0.5)") )
        .attr("stroke-width", 3)
    ;    


  let text = svg.selectAll()
    .data(jsonDay)
    .enter();

  text 
    .append("text")
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("fill", "black")
    .attr("x", d => { return -30 + margin + (d.Enjoyment * xinc) + 30; })
    .attr("y", d => { return -30 + canvasH - (margin + (d.Throw * yinc)) + 35; })
    .text(d => {return d.Throw})

  text
    .append("text")
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("fill", "black")
    .attr("x", d => { return -30 + margin + (d.Enjoyment * xinc) + 30; })
    .attr("y", d => { return -30 + canvasH - (margin + (d.Throw * yinc)) + 80; })
    .text(d => {return d.Toy});

  const xText = svg.append("text")
    .attr("x",  canvasW / 2)
    .attr("y", canvasH - 10)
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "24px")
    .attr("fill", "black")
    .text("Enjoyment Level");

  const yText = svg.append("text")
    .attr("text-anchor","middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "24px")
    .attr("fill", "black")
    .attr("transform", "translate(10,"+(canvasH/2)+") rotate(90)")
    .text("Amount of Shakes");


}


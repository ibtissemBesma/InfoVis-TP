
var width = 650, height = 500;
var colors = d3.scaleOrdinal(d3.schemeDark2);

//first chart


var svg = d3.select("body").append("svg")
            .attr("width",500).attr("height",height);
var details = [{category:"18 - 25 ans", number: 67},{category:"25 - 30 ans", number: 16},
                {category:"30 - 35 ans", number: 11},{category:"35 - 40 ans", number: 6},
                {category:"40 - 45 ans", number: 2},{category:"> 45 ans", number: 4}]
var data = d3.pie().sort(null).value(function(d){
                return d.number;
            })(details);

            
            console.log(data);
var segments = d3.arc() 
                 .innerRadius(120)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections = svg.append("g").attr("transform", "translate(200,250)").selectAll("path").data(data);
sections.enter().append("path").attr("d",segments).attr("fill", function(d){
    return colors(d.data.number);
});

var content = d3.select("g").selectAll("text").data(data);
content.enter().append("text").classed("inside", true).each(function(d){
    var center = segments.centroid(d);
    d3.select(this).attr("x", center[0]).attr("y", center[1]).text(d.data.number)
})

var legends = svg.append("g").attr("transform", "translate(150, 140)").selectAll(".legends").data(data);
var legend = legends.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 10)
                     .attr("y", 10);

legend.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 100)
.attr("y", 10);
var legend1s = svg.append("g").attr("transform", "translate(110, 450)").append("text")
                      .classed("label", true).text("Repartition des ages");
//scond chart

var svg2 = d3.select("body").append("svg")
            .attr("width",560).attr("height",height);
var details2 = [{name:"Homme", number: 59},{name:"Femme", number: 47}]
var data2 = d3.pie().sort(null).value(function(d){
                return d.number;
            })(details2);
console.log("data2",data2[0].data.name)
var segments2 = d3.arc() 
                 .innerRadius(0)
                 .outerRadius(170)
                 .padAngle(.05)
                 .padRadius(50);

var sections2 = svg2.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data2);
sections2.enter().append("path").attr("d",segments2).attr("fill", function(d){
    return colors(d.data.number);
});

var content2 = d3.select("g").selectAll("text").data(data2);
content2.enter().append("text").classed("inside", true).each(function(d){
    var center2 = segments2.centroid(d);
    d3.select(this).attr("x", center2[0]).attr("y", center2[1]).text(d.data.name)
})

var legends2 = svg2.append("g").attr("transform", "translate(440, 150)").attr("class","bg").selectAll(".legends").data(data2);
var legend2 = legends2.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend2.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend2.append("text").classed("label", true).text(function(d){return d.data.name;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend2.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);
var legends3 = svg2.append("g").attr("transform", "translate(110, 450)").append("text").classed("label", true).text("Repartition des hommes et des femmes");




//third chart
var svg4 = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details4 = [{category:"chomeur(se)", number: 5},{category:"Employe(e) - prive", number: 11},
                {category:"Employe(e) - etat ", number: 22},{category:"etudiant", number: 68}]
var data4 = d3.pie().sort(null).startAngle(-0.5 * Math.PI)
.endAngle(0.5 * Math.PI).value(function(d){
                return d.number;
            })(details4);

console.log("data4",data4);
var segments4 = d3.arc() 
                 .innerRadius(0)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections4 = svg4.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data4);
sections4.enter().append("path").attr("d",segments4).attr("fill", function(d){
    return colors(d.data.number);
});

var content4 = d3.select("g").selectAll("text").data(data4);
content4.enter().append("text").classed("inside", true).each(function(d){
    var center4 = segments4.centroid(d);
    d3.select(this).attr("x", center4[0]).attr("y", center4[1]).text(d.data.number)
})

var legends4 = svg4.append("g").attr("transform", "translate(470, 070)").selectAll(".legends").data(data4);
var legend4 = legends4.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend4.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend4.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend4.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);

var legends5 = svg4.append("g").attr("transform", "translate(110, 280)").append("text").classed("label", true).text("Repartition des categories des activites professionnelles");




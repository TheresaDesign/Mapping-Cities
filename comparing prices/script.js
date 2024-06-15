document.addEventListener('DOMContentLoaded', function() {
    const cityData = {
        Wien: [
            { year: 2012, rent: 700, food: 300, income: 2000 },
            { year: 2013, rent: 720, food: 310, income: 2050 },
            { year: 2014, rent: 740, food: 320, income: 2100 },
            { year: 2015, rent: 760, food: 330, income: 2150 },
            { year: 2016, rent: 780, food: 340, income: 2200 },
            { year: 2017, rent: 800, food: 350, income: 2250 },
            { year: 2018, rent: 820, food: 360, income: 2300 },
            { year: 2019, rent: 840, food: 370, income: 2350 },
            { year: 2020, rent: 860, food: 380, income: 2400 },
            { year: 2021, rent: 880, food: 390, income: 2450 },
            { year: 2022, rent: 900, food: 400, income: 2500 },
            { year: 2023, rent: 920, food: 410, income: 2550 },
        ],
        Paris: [
            { year: 2012, rent: 800, food: 350, income: 2500 },
            { year: 2013, rent: 820, food: 360, income: 2550 },
            { year: 2014, rent: 840, food: 370, income: 2600 },
            { year: 2015, rent: 860, food: 380, income: 2650 },
            { year: 2016, rent: 880, food: 390, income: 2700 },
            { year: 2017, rent: 900, food: 400, income: 2750 },
            { year: 2018, rent: 920, food: 410, income: 2800 },
            { year: 2019, rent: 940, food: 420, income: 2850 },
            { year: 2020, rent: 960, food: 430, income: 2900 },
            { year: 2021, rent: 980, food: 440, income: 2950 },
            { year: 2022, rent: 1000, food: 450, income: 3000 },
            { year: 2023, rent: 1020, food: 460, income: 3050 },
        ],
        London: [
            { year: 2012, rent: 900, food: 400, income: 3000 },
            { year: 2013, rent: 920, food: 410, income: 3050 },
            { year: 2014, rent: 940, food: 420, income: 3100 },
            { year: 2015, rent: 960, food: 430, income: 3150 },
            { year: 2016, rent: 980, food: 440, income: 3200 },
            { year: 2017, rent: 1000, food: 450, income: 3250 },
            { year: 2018, rent: 1020, food: 460, income: 3300 },
            { year: 2019, rent: 1040, food: 470, income: 3350 },
            { year: 2020, rent: 1060, food: 480, income: 3400 },
            { year: 2021, rent: 1080, food: 490, income: 3450 },
            { year: 2022, rent: 1100, food: 500, income: 3500 },
            { year: 2023, rent: 1120, food: 510, income: 3550 },
        ],
        Berlin: [
            { year: 2012, rent: 600, food: 280, income: 1800 },
            { year: 2013, rent: 620, food: 290, income: 1850 },
            { year: 2014, rent: 640, food: 300, income: 1900 },
            { year: 2015, rent: 660, food: 310, income: 1950 },
            { year: 2016, rent: 680, food: 320, income: 2000 },
            { year: 2017, rent: 700, food: 330, income: 2050 },
            { year: 2018, rent: 720, food: 340, income: 2100 },
            { year: 2019, rent: 740, food: 350, income: 2150 },
            { year: 2020, rent: 760, food: 360, income: 2200 },
            { year: 2021, rent: 780, food: 370, income: 2250 },
            { year: 2022, rent: 800, food: 380, income: 2300 },
            { year: 2023, rent: 820, food: 390, income: 2350 },
        ],
    };

    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
          width = 800 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

    const x = d3.scaleLinear().domain([2012, 2023]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 4000]).range([height, 0]);

    const line = d3.line()
        .x(d => x(d.year))
        .y(d => y(d.value));

    const svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const colors = {
        rent: "rgba(255, 99, 132, 1)",
        food: "rgba(54, 162, 235, 1)",
        income: "rgba(75, 192, 192, 1)"
    };

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));

    const updateChart = (city) => {
        const data = cityData[city];

        const lineData = ["rent", "food", "income"].map(key => {
            return {
                key: key,
                values: data.map(d => ({ year: d.year, value: d[key] }))
            };
        });

        const lines = svg.selectAll(".line")
            .data(lineData);

        lines.enter()
            .append("path")
            .merge(lines)
            .attr("class", d => `line line-${d.key}`)
            .attr("d", d => line(d.values))
            .style("stroke", d => colors[d.key]);

        lines.exit().remove();

        const dots = svg.selectAll(".dot")
            .data(data.flatMap(d => ["rent", "food", "income"].map(key => ({ year: d.year, value: d[key], key }))));

        dots.enter()
            .append("circle")
            .merge(dots)
            .attr("class", d => `dot dot-${d.key}`)
            .attr("cx", d => x(d.year))
            .attr("cy", d => y(d.value))
            .attr("r", 5)
            .style("fill", d => colors[d.key])
            .on("mouseover", (event, d) => {
                d3.selectAll('.line').style('opacity', 0.2);
                d3.select(`.line-${d.key}`).style('opacity', 1);

                d3.select('#tooltip')
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 25) + 'px')
                    .style('display', 'inline-block')
                    .html(`Jahr: ${d.year}<br>${d.key.charAt(0).toUpperCase() + d.key.slice(1)}: ${d.value} EUR`);
            })
            .on("mouseout", () => {
                d3.selectAll('.line').style('opacity', 1);
                d3.select('#tooltip').style('display', 'none');
            });

        dots.exit().remove();
    };

    updateChart('Wien');

    window.updateChart = updateChart;

    const legend = svg.selectAll(".legend")
        .data(["rent", "food", "income"])
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * 20})`);

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", d => colors[d]);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(d => {
            if (d === "rent") return "Mietpreise";
            if (d === "food") return "Lebensmittelpreise";
            if (d === "income") return "Einkommen";
        });

    d3.select("body").append("div")
        .attr("id", "tooltip")
        .attr("style", "position: absolute; background: #fff; padding: 5px; border: 1px solid #ccc; border-radius: 5px; display: none; pointer-events: none;");
});

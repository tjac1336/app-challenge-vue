const temp = (x) => {return x - 273.15}

const sub = new Vue ({
    el: '#sub',
    data: {
        originalTemp: 0.00
    },
    computed: {
        result: function () {
            const kelvin = parseFloat(this.originalTemp)
            if (isNaN(parseFloat(this.originalTemp)))
            {
                return "Please enter a valid number"
            }

            return `The temperature in Celcius is ${temp(kelvin).toFixed(2)}`
        }
    }
})
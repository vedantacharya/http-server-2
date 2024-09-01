    const express =  require("express")
    const app = express()
    const port = process.env.PORT || 3000

    const users = [{
        name: "John",
        kidney: [{
            healthy: true
        },
        {
            healthy: false
        }
    ]
    }]

    app.get('/', (req, res) => {
    kidneys = users[0].kidney
    let numberOfKidneys = kidneys.length
    let numberOfHealthyKidneys = 0

    for (let i = 0; i<numberOfKidneys; i++){
        if (kidneys[i].healthy == true)
            numberOfHealthyKidneys += 1
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    }
    )

    app.use(express.json())

    app.post('/', (req, res) => {
        const isHealthy = req.body.isHealthy
        users[0].kidney.push({healthy: isHealthy})
        res.json({
            msg: "Done!"
        })
    })


    app.put('/', (req, res) => {
        //Do something
    })


    app.delete('/', (req, res) => {
        //Do something
    })

    app.listen(3000)
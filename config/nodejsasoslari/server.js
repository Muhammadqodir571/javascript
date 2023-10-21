const http=require('http')
const {v4}=require('uuid')
const getCarsData = require('./cars')



let cars=[
    {
    id:"1",
    name:"Coblte",
    model:"chebralete",
    factory:'ASAKA'
}
]


const server=http.createServer(async(req,res)=>{

    if(req.url==='/cars' && req.method==='GET'){



        res.writeHead(200,{'Content-Type':'application/json  charset=utf8'})

        const resp={
            status:'OK',
            car:cars
        }

        res.end(JSON.stringify(resp))
    }else if(req.url==='/cars' && req.method==='POST'){
        

        const data= await getCarsData(req)

        const {name,model,factory}=JSON.parse(data)

        const newCar={
            id:v4(),
            name:name,
            model:model,
            factory:factory
        }
        cars.push(newCar)

        const resp ={
            status:'CreateCar',
            car:newCar
        }
        res.writeHead(200,{'Content-Type':'application/json  charset=utf8'})
        res.end(JSON.stringify(resp))

        }else if(req.url.match(/\/cars\/\w+/) && req.method==='GET'){
            const id=req.url.split('/')[2]

            const carid=cars.find(b => b.id===id)

            res.writeHead(200,{'Content-Type':'application/json charset=utf8'})

            const resp={
                status:'OK',
                car:carid
            }

            res.end(JSON.stringify(resp))
      }else if(req.url.match(/\/cars\/\w+/) && req.method==='PUT'){
        const id=req.url.split('/')[2]

        const data= await getCarsData(req)
        const {name,model,factory}=JSON.parse(data)

        const IDx=cars.findIndex(b =>b.id===id)

        const carPUT={
            id:cars[IDx].id,
            name:name || cars[IDx].name,
            model:model||cars[IDx].model,
            factory:factory||cars[IDx].factory
        }

        cars[IDx]=carPUT
        res.writeHead(200,{'Content-Type':'application/json'})

        const resp={
            status:'puted',
            cars:carPUT
        }
        res.end(JSON.stringify(resp))


      }else if(req.url.match(/\/cars\/\w+/) && req.method==='DELETE'){
        const id=req.url.split('/')[2]

         cars=cars.filter(b => b.id!==id)
        res.writeHead(200,{'Content-Type':'application/json charset=utf8'})

        const resp={
            status:'Delete',
        
        }
        res.end(JSON.stringify(resp))
      }

})


const PORT=process.env.PORT||4000



server.listen(PORT,()=>{
    console.log(`server run on ${PORT}`);
})
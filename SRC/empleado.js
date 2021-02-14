db.empleado2.insertMany ([
    {
       NombreEmpleado: "Juan Lopez",
       CodigoDepartamento:["I001","A004","F006"],
       Sueldo: 1500,
       FechaDeNacimiento: new Date ("2000-04-12"),
       CodigoPostal:41001,
       Jefe:"Juan Cruz"
    },
    {
        NombreEmpleado: "Ruben Ruiz",
        CodigoDepartamento:["M003","D006"],
        Sueldo: 1800,
        FechaDeNacimiento: new Date ("1988-05-15"),
        CodigoPostal:41500,
        Jefe:"Jose Reyes"
     },
     {
        NombreEmpleado: "Raul Gallego",
        CodigoDepartamento: ["V002", "F005"],
        Sueldo: 1700,
        FechaDeNacimiento: new Date ("2001-10-23"),
        CodigoPostal:18010,
        Jefe:"Javier Lopez"
     },
     {
        NombreEmpleado: "Pablo Garcia",
        CodigoDepartamento:"I001",
        Sueldo: 1900,
        FechaDeNacimiento: new Date ("1979-07-21"),
        CodigoPostal:11401,
        Jefe:"Juan Cruz"
     },
     {
        NombreEmpleado: "Alejandro Gomez",
        CodigoDepartamento:"M003",
        Sueldo: 2000,
        FechaDeNacimiento: new Date ("1982-12-01"),
        CodigoPostal:04700,
        Jefe:"Tomas Suarez"
     },
     {
        NombreEmpleado: "Antonio Gonzalez",
        CodigoDepartamento:["I001", "V002"],
        Sueldo: 1500,
        FechaDeNacimiento: new Date ("2000-04-12"),
        CodigoPostal:41003,
        Jefe:["Ruben Sanchez","Javier Lopez"]
     },
     {
        NombreEmpleado: "Miguel Torres",
        CodigoDepartamento:["I001","M003","V002"],
        Sueldo: 1500,
        FechaDeNacimiento: new Date ("2000-04-12"),
        CodigoPostal:41008,
        Jefe:["Juan Cruz","Jose Reyes","Lucia Guerra"]
     },
     {
        NombreEmpleado: "Fernando Montoya",
        CodigoDepartamento:["F005","D006"],
        Sueldo: 1500,
        FechaDeNacimiento: new Date ("2000-04-12"),
        CodigoPostal:41004,
        Jefe:["Manuel Cabello","Maria De La Vega"]
     },
])

db.departamento2.insertMany ([

    {
        NombreDepartamento:"Informatica",
        JefeDepartamento: ["Juan Cruz","Ruben Sanchez"],
        Codigo: "I001",
    },
    {
        NombreDepartamento:"Ventas",
        JefeDepartamento: ["Alberto Naranjo","Javier Lopez","Lucia Guerra"],
        Codigo: "V002",
    },
    {
        NombreDepartamento:"Mecanica",
        JefeDepartamento: ["Tomas Suarez","Jose Reyes"],
        Codigo: "M003",
    },
    {
      NombreDepartamento:"Atencion al Cliente",
      JefeDepartamento: ["Maria Garcia","Samuel Guillen"],
      Codigo: "A004",
    },
    {
      NombreDepartamento:"Financiero",
      JefeDepartamento: ["Manuel Cabello","Roberto Yanez","Juan Perea"],
      Codigo: "F005",
    },
    { 
      NombreDepartamento:"Distribucion",
      JefeDepartamento: ["Laura Gomez","Maria De La Vega"],
      Codigo: "D006",
    },
    
    ])
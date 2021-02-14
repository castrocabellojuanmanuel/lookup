db.empleado2.aggregate([

    {
        $lookup:
          {
            from: "departamento2",
            localField: "CodigoDepartamento",
            foreignField: "Codigo",
            as: "InfoDepartamento",
          }
     }
]).pretty()

db.empleado2.aggregate([

  {
      $lookup:
        {
          from: "departamento2",
          localField: "Jefe",
          foreignField: "JefeDepartamento",
          as: "DepartamentoDelJefe",
        }
   }
]).pretty()


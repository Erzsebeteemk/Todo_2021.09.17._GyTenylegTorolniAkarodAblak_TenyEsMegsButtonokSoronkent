
// T: Főgombra kattintva mindig újabb li-t tesz az ul-be, az input mezőből (input, val, li, ul)
let hanyadiksor = 1
let szoveg = null

$("#fogomb").click (()  => {

            szoveg      = $("#inputMezo").val()
            hanyadiksor = parseInt(hanyadiksor)+1

                                //....................................... A div-es teny és megs 4 db sort írtam be. .........//
            $("ul").append(` <li   class="sor"  id="sor${hanyadiksor}"   data-szamozo="${hanyadiksor}">
                                ${szoveg}
                                <button class="ikon"  data-szamozo="${hanyadiksor}" >  <i class="fas fa-space-shuttle"></i>   </button>
                                <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>
                                                   
                                <div class="rejt tenymegslath" id="tenymegs${hanyadiksor}"  data-szamozo="${hanyadiksor}">
                                    <button class="teny lathgomb" id="teny${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Tényleg törlés  </button>
                                    <button class="megs lathgomb" id="megs${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Mégsem  </button>
                                </div>

                             </li> 
            `)
}
)


/*
// T: A kommentelt sorok gyakorlások, melyek jól működnek:)
$("#veletlenhatter").click (() => {
    $("p").toggleClass("piros")
}
)

A torl2-nél így simán nem működik, ezért kell az eseményfigyelő majd: on()
$("#torl1").click (() => {
    $("#tenymegs1").toggleClass("rejt")
}
)
*/


// T: Ha a törlés gombra kattintunk, akkor felhoz egy ablakot, hogy tényleg törölni akarjuk-e,
//akárhány sornál, a sor alatti sorba hozza az ablakot.
let mittorol = null
let toroltorol = null
let vissza = null
let alatti = null

$("ul").on("click",".torl",(event) => {
    mittorol = $(event.currentTarget).attr("data-szamozo")
    $("#tenymegs"+mittorol).toggleClass("rejt")
}
)

    $("ul").on("click", ".teny",(event) => {
    toroltorol = $(event.currentTarget).attr("data-szamozo")
    $("#sor"+toroltorol).remove()
    }
    )
    
    $("ul").on("click", ".megs",(event) => {
    vissza = $(event.currentTarget).attr("data-szamozo")
    $("#tenymegs"+vissza).toggleClass("rejt")
    }
    )


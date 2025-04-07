   1.uzd

let vards = "Eliza";
let vecums = 18;
let irPilsonis = true;


console.log("Elza:", vards);
console.log("19:", vecums);
console.log("Ir pilsonis:", irPilsonis);


if (vecums >= 18 && irPilsonis == true) 
    { console.log("Drīkst balsot.");
} else if (vecums >= 18 && irPilsonis == false)
     { console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
} else if (vecums < 18 && irPilsonis == true) 
    { console.log("Personai nav 18 gadi, bet viņa ir pilsonis.");
} else if
{ console.log("Personai nav 18 gadi, un viņa nav pilsonis.");
}

    2.uzd

let atzime = prompt("Ievadiet atzīmi (0-100):");

atzime = parseInt(atzime);

  if (isNaN(atzime) || atzime < 0 || atzime > 100) {
    console.log("Ievadiet atzīmi no 0 līdz 100.");
}
else {
   
    if (atzime >= 90) {
        console.log("Izcili");
    } 
    else if (atzime >= 70) {
        console.log("Labi");
    } 
    else if (atzime >= 50) {
        console.log("Vidēji");
    } 
    else {
        console.log("Slikti");
    }
}

   3.uzd


let masive = [];

masivs.push("1");
masivs.push("2");
masivs.push("3");
masivs.push("4");
masivs.push("5");


for (let i = 0; i < masivs.length; i++)
     { console.log(masivs[i]);
}
  

   4.uzd

let masivs = ["1,2,3,4,5"];

for (let i = masivs.length - 1; i >= 0; i--) 
    { console.log(masivs[i]);
}


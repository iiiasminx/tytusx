const textoPruebass = `
// Regla 5
t1 = b;
funcionRandom1();
funcionRandom2();
t8 = 4;
funcionRandom1();
funcionRandom2();
t2 = t3 + 1;
b = t1;
t5 = t9;
t9 = t5;

//Regla 6, 7, 8, 9
t5 = t5 + 0;
t7=t7-0;
t9 = t9* 1 ;
t8 = t8 / 1;

//Regla 10 - 13
T1 = T2 + 0;
T3 = T4 - 0;
T5 = T6 * 1;
T7 = T8 / 1;

//Regla 14 - 16
T9 = T10 * 2;
T11 = T12 * 0;
T13 = 0 / T14;


//Regla 3
if (1 == 1 ) goto L1;
goto L2;


//Regla 4
if (1 == 0 ) goto L1;
goto L3;


// Regla 1
goto L1;
<INSTRUCCIONES>
//L3:
//print("Hola mundo");
L1:
printf("%f", 5.33);

// Regla 2
if (4==4) goto L1;
goto L2;
L1:
    printf("Verdadero");
L2:
    printf("Falso");
`;

consolaC3D.value = textoPruebass;
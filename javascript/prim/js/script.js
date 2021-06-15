"use strict";

window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    // Timer

    const deadline = '2021-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


        // modal

    const modals = document.querySelectorAll('[data-modal]'),
          modalsContent = document.querySelector('.modal'),
          modalsClose = document.querySelector('[data-close]');

          function moveScrol () {
            modalsContent.style.display = 'none';
            document.body.style.overflow = 'visible'; // разрешает скролить сайт */
          }

          function showModal () {
                modalsContent.style.display = 'block';
                document.body.style.overflow = 'hidden'; // запрещаем скролить сайт когда модальное окно октрыто
              }
          

          function showModalByScroll () {
                if (document.documentElement.scrollTop >= 3500) {
                    showModal ();
                    window.removeEventListener('scroll', showModalByScroll); // удялть можно только явные функции колбек не подойдет
                }
             }



          modalsContent.addEventListener('click', (event)=>{   // если кликаем на подложку то окно закрывается
                if (event.target.classList == "modal") {
                    moveScrol ();
                }
          });


          modals.forEach((item)=>{
                item.addEventListener('click',()=>{
                    showModal (); 
                });
          });


         modalsClose.addEventListener('click', moveScrol);
       

         document.addEventListener('keydown',(event)=>{
            if ( event.code === "Escape" && modalsContent.style.display == 'block') {   // https://keycode.info/  это про все коды
                moveScrol();
            }
         });



         window.addEventListener('scroll', showModalByScroll);



         const menuFood = document.querySelector('.menu__field'),
               cotainerForFood = menuFood.querySelector('.container');



         class MenuForFood {
             constructor(img, title, subtitle, price,parrentSelector){
                this.img = img;
                this.title = title;
                this.subtitle = subtitle;
                this.price = price;
             }

             addNewMenu() {
                cotainerForFood.innerHTML += `
                    <div class="menu__item">
                        <img src="${this.img}" alt="vegy">
                        <h3 class="menu__item-subtitle">${this.title}"</h3>
                        <div class="menu__item-descr">${this.subtitle}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>             
                `;
             }
         }

         const addNewMenuForFood = new MenuForFood("img/tabs/vegy.jpg",`Меню "Фитнес`,'Меню "Фитнес" - это новый подход к приготовлению блюд',229);
         addNewMenuForFood.addNewMenu();
         const addNewMenuForFood2 = new MenuForFood("img/tabs/vegy.jpg",`Меню "Фитнес`,'Меню "Фитнес" - это новый подход к приготовлению блюд',229);
         addNewMenuForFood2.addNewMenu();



/*          <div class="menu__item">
         <img src="img/tabs/vegy.jpg" alt="vegy">
         <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
         <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
         <div class="menu__item-divider"></div>
         <div class="menu__item-price">
             <div class="menu__item-cost">Цена:</div>
             <div class="menu__item-total"><span>229</span> грн/день</div>
         </div>
     </div> */



         const res = function (a, b, ...rest) {
            
            console.log(a,b,rest); // 1 ,2 [3,4,5,6,'hello']
            

         };
        
         res(1,2,3,4,5,6,"hello");



        function calc(a, b = 2) { // по умолчанию задаем значение для b
            console.log(a*b); // 1 ,2 [3,4,5,6,'hello']
        }
        calc(1);
}); 
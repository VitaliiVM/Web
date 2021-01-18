
   'use strict';//строгий режим
    var multiItemSlider = (function () {
      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            if (!_sliderControlLeft.classList.contains('slider__control_show')) {
              _sliderControlLeft.classList.add('slider__control_show');
            }
            if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
              _sliderControlRight.classList.remove('slider__control_show');
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            if (!_sliderControlRight.classList.contains('slider__control_show')) {
              _sliderControlRight.classList.add('slider__control_show');
            }
            if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
              _sliderControlLeft.classList.remove('slider__control_show');
            }
            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
          }
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());

var slider = multiItemSlider('.slider')
    



//для инпута и кнопки отправить

var inpt = document.querySelector('#bigitext');
var inpt2 = document.querySelector('#bigi');
var inptsmally = document.querySelector('#smally');
var inptsmally2 = document.querySelector('#smally2');
var knopka = document.querySelector('.button2');
knopka.onclick = function (event) {
  event.preventDefault();//метод для form что бы не перезагружалась страница
  if (inpt.value || inpt2.value || inptsmally.value || inptsmally2.value) {
    console.log(inpt.value);
    console.log(inpt2.value);
    console.log(inptsmally.value);
    console.log(inptsmally2.value);
    alert('Ваши данные были отправлены!');
    inpt.value = "";
    inpt2.value = "";
    inptsmally.value = "";
    inptsmally2.value = "";
    
  } else {
    alert('Данные не введены!');
  }

}

//для more works

var wrk = document.querySelector(".more_work");
var l = document.querySelector("#lmw");

l.onmouseenter = function () {
  wrk.style.backgroundColor = " #10c9c3";
  l.style.color = "white";
  console.log("При наведении на .more_work p, div more_work меняет цвет");
}

l.onmouseleave = function () {
  wrk.style.backgroundColor = null;
  l.style.color = null;
}


//Для бургер меню

var t = document.querySelector(".header_burger");
var i = document.querySelector(".header_menu");
var as = document.querySelector("body");
//var z = document.querySelector(".header_body");

t.onclick = function (event) {
  t.classList.toggle("active");
  i.classList.toggle("active");
  as.classList.toggle("lock");
}


    


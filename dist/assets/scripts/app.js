/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./src/assets/scripts/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _module_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/stage */ "./src/assets/scripts/module/stage.js");
/* harmony import */ var _module_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/mesh */ "./src/assets/scripts/module/mesh.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Slider = /*#__PURE__*/function () {
  function Slider() {
    var _this = this;
    _classCallCheck(this, Slider);
    this.stage = new _module_stage__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.stage.init();
    this.mesh = new _module_mesh__WEBPACK_IMPORTED_MODULE_1__["default"](this.stage);
    this.mesh.init();
    window.addEventListener('resize', function () {
      _this.stage.onResize();
    });
    this.currentNum = 0;
    window.addEventListener('load', function () {
      _this.mesh._nextColor(_this.currentNum);
      _this._autoChangeSlide();
      var _raf = function _raf() {
        window.requestAnimationFrame(function () {
          _this.stage.onRaf();
          _this.mesh.onRaf();
          _raf();
        });
      };
      _raf();
    });
  }
  _createClass(Slider, [{
    key: "_moveChangeSlide",
    value: function _moveChangeSlide() {
      if (this.currentNum > 1) {
        this.currentNum = 0;
      } else {
        this.currentNum++;
      }
    }
  }, {
    key: "_autoChangeSlide",
    value: function _autoChangeSlide() {
      var _this2 = this;
      gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to({}, {
        ease: 'none',
        duration: 7.0,
        delay: -5.0,
        repeat: -1.0
      }).eventCallback('onRepeat', function () {
        _this2._moveChangeSlide();
        setTimeout(function () {
          _this2.mesh._diffuseConverge(_this2.currentNum);
        }, 1000);
      });
    }
  }]);
  return Slider;
}();

new Slider();

/***/ }),

/***/ "./src/assets/scripts/module/image-pixel-filter.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/module/image-pixel-filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePixelFilter)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ImagePixelFilter = /*#__PURE__*/function () {
  function ImagePixelFilter(_image, _width, _height, _ratio) {
    _classCallCheck(this, ImagePixelFilter);
    this.position = [];
    this.color = [];
    this.id = [];
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = _width;
    canvas.height = _height;
    ctx.drawImage(_image, 0, 0);
    var originalPixel = ctx.getImageData(0, 0, _width, _height);
    for (var i = 0; i < originalPixel.data.length; i++) {
      if ((i + 1) % (4 * _ratio) === 0) {
        var colorR = originalPixel.data[i - 3] / 255;
        var colorG = originalPixel.data[i - 2] / 255;
        var colorB = originalPixel.data[i - 1] / 255;
        var count = (i + 1) / 4 - 1;
        var nx = count % _width;
        var ny = Math.floor(count / _width);
        var nz = 0;
        var x = nx - _width / 2;
        var y = -(ny - _height / 2);
        var z = 0.0;
        this.position.push(x, y, z);
        this.color.push(colorR, colorG, colorB);
        this.id.push(nx, ny, nz);
      }
    }
  }
  _createClass(ImagePixelFilter, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getArrayLength",
    value: function getArrayLength() {
      return this.position.length / 3;
    }
  }]);
  return ImagePixelFilter;
}();


/***/ }),

/***/ "./src/assets/scripts/module/mesh.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/module/mesh.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ "./node_modules/three/examples/jsm/postprocessing/EffectComposer.js");
/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ "./node_modules/three/examples/jsm/postprocessing/RenderPass.js");
/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ "./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js");
/* harmony import */ var _shaders_vertexshader_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/vertexshader.vert */ "./src/assets/scripts/shaders/vertexshader.vert");
/* harmony import */ var _shaders_fragmentshader_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/fragmentshader.frag */ "./src/assets/scripts/shaders/fragmentshader.frag");
/* harmony import */ var _image_pixel_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-pixel-filter */ "./src/assets/scripts/module/image-pixel-filter.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var Mesh = /*#__PURE__*/function () {
  function Mesh(stage) {
    _classCallCheck(this, Mesh);
    this.stage = stage;
    this.img = [];
    this.imgData = [];
    this.promiseList = [];
    this.duration = 3.2;
    this.ease = 'power2.inOut';
    this.distortionRange = 30;
    this.noiseRangeX = 0.007;
    this.noiseRangeY = 0.006;
    this.noiseRangeZ = 0.009;
    this.timeSpeed = 0.0005;
    this.bloomStrength = 1.5;
    this.composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(this.stage.renderer);
    this.composer.addPass(new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_5__.RenderPass(this.stage.scene, this.stage.camera));
    this.UnrealBloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_6__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_7__.Vector2(this.stage.width, this.stage.height), 0.0, 1.4, 0.0);
    this.composer.addPass(this.UnrealBloomPass);
  }
  _createClass(Mesh, [{
    key: "init",
    value: function init() {
      var _this = this;
      var _loop = function _loop(i) {
        _this.promiseList.push(new Promise(function (resolve) {
          _this.img[i] = new Image();
          _this.img[i].width = 950;
          _this.img[i].height = 950;
          _this.img[i].crossOrigin = "anonymous";
          _this.img[i].src = "./assets/images/memorie0".concat(i + 1.0, ".png");
          _this.img[i].addEventListener('load', function () {
            _this.imgData[i] = new _image_pixel_filter__WEBPACK_IMPORTED_MODULE_2__["default"](_this.img[i], _this.img[i].width, _this.img[i].height, 3);
            resolve();
          });
        }));
      };
      for (var i = 0; i < 3; i++) {
        _loop(i);
      }
      Promise.all(this.promiseList).then(function () {
        return _this._setMesh();
      }, this._setGui());
    }
  }, {
    key: "_setMesh",
    value: function _setMesh() {
      var position = this.imgData[0].getPosition();
      var positions = new three__WEBPACK_IMPORTED_MODULE_7__.BufferAttribute(new Float32Array(position), 3);
      var color_1 = this.imgData[0].getColor();
      var colors_1 = new three__WEBPACK_IMPORTED_MODULE_7__.BufferAttribute(new Float32Array(color_1), 3);
      var color_2 = this.imgData[1].getColor();
      var colors_2 = new three__WEBPACK_IMPORTED_MODULE_7__.BufferAttribute(new Float32Array(color_2), 3);
      var color_3 = this.imgData[2].getColor();
      var colors_3 = new three__WEBPACK_IMPORTED_MODULE_7__.BufferAttribute(new Float32Array(color_3), 3);
      this.geometry = new three__WEBPACK_IMPORTED_MODULE_7__.BufferGeometry();
      this.geometry.setAttribute('position', positions);
      this.geometry.setAttribute('color_1', colors_1);
      this.geometry.setAttribute('color_2', colors_2);
      this.geometry.setAttribute('color_3', colors_3);
      this.material = new three__WEBPACK_IMPORTED_MODULE_7__.RawShaderMaterial({
        vertexShader: _shaders_vertexshader_vert__WEBPACK_IMPORTED_MODULE_0__["default"],
        fragmentShader: _shaders_fragmentshader_frag__WEBPACK_IMPORTED_MODULE_1__["default"],
        transparent: false,
        depthTest: true,
        uniforms: {
          noiseRangeX: {
            type: 'f',
            value: this.noiseRangeX
          },
          noiseRangeY: {
            type: 'f',
            value: this.noiseRangeY
          },
          noiseRangeZ: {
            type: 'f',
            value: this.noiseRangeX
          },
          colorLevel_1: {
            type: 'f',
            value: 0.0
          },
          colorLevel_2: {
            type: 'f',
            value: 0.0
          },
          colorLevel_3: {
            type: 'f',
            value: 0.0
          },
          distortionLevel: {
            type: 'f',
            value: 0.0
          },
          distortionRange: {
            type: 'f',
            value: this.distortionRange
          },
          time: {
            type: 'f',
            value: 0.0
          }
        }
      });
      this.mesh = new three__WEBPACK_IMPORTED_MODULE_7__.Points(this.geometry, this.material);
      this.stage.scene.add(this.mesh);
    }
  }, {
    key: "_diffuseConverge",
    value: function _diffuseConverge(number) {
      var _this2 = this;
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.distortionLevel, {
        duration: 3.0,
        ease: 'power2.inOut',
        value: 1.0,
        onComplete: function onComplete() {
          _this2._nextColor(number);
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(_this2.mesh.material.uniforms.distortionLevel, {
            duration: 3.0,
            ease: 'power2.inOut',
            value: 0.0
          });
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.UnrealBloomPass, {
        duration: this.duration,
        ease: 'power2.inOut',
        strength: this.bloomStrength,
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(_this2.UnrealBloomPass, {
            duration: _this2.duration,
            ease: 'power2.inOut',
            strength: 0.0
          });
        }
      });
    }
  }, {
    key: "_nextColor",
    value: function _nextColor(number) {
      switch (number) {
        case 0:
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_3, {
            duration: this.duration,
            ease: this.ease,
            value: 0.0
          });
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_1, {
            duration: this.duration,
            ease: this.ease,
            value: 1.0
          });
          break;
        case 1:
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_1, {
            duration: this.duration,
            ease: this.ease,
            value: 0.0
          });
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_2, {
            duration: this.duration,
            ease: this.ease,
            value: 1.0
          });
          break;
        case 2:
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_2, {
            duration: this.duration,
            ease: this.ease,
            value: 0.0
          });
          gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(this.mesh.material.uniforms.colorLevel_3, {
            duration: this.duration,
            ease: this.ease,
            value: 1.0
          });
          break;
      }
    }
  }, {
    key: "_setGui",
    value: function _setGui() {
      var _this3 = this;
      var parameter = {
        distortionRange: this.distortionRange,
        noiseRangeX: this.noiseRangeX,
        noiseRangeY: this.noiseRangeY,
        noiseRangeZ: this.noiseRangeZ,
        timeSpeed: this.timeSpeed,
        bloomStrength: this.bloomStrength
      };
      var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__.GUI();
      gui.add(parameter, 'distortionRange', 0.0, 100, 1.0).onChange(function (value) {
        _this3.mesh.material.uniforms.distortionRange.value = value;
      });
      gui.add(parameter, 'noiseRangeX', 0.0, 0.01, 0.001).onChange(function (value) {
        _this3.mesh.material.uniforms.noiseRangeX.value = value;
      });
      gui.add(parameter, 'noiseRangeY', 0.0, 0.01, 0.001).onChange(function (value) {
        _this3.mesh.material.uniforms.noiseRangeY.value = value;
      });
      gui.add(parameter, 'noiseRangeZ', 0.0, 0.01, 0.001).onChange(function (value) {
        _this3.mesh.material.uniforms.noiseRangeY.value = value;
      });
      gui.add(parameter, 'bloomStrength', 0.0, 10.0, 1.0).onChange(function (value) {
        _this3.bloomStrength = value;
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      this.mesh.material.uniforms.time.value += this.timeSpeed;
      this.composer.render();
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      this._render();
    }
  }]);
  return Mesh;
}();


/***/ }),

/***/ "./src/assets/scripts/module/stage.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/module/stage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stage)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-orbitcontrols */ "./node_modules/three-orbitcontrols/OrbitControls.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Stage = /*#__PURE__*/function () {
  function Stage() {
    _classCallCheck(this, Stage);
    this.renderParam = {
      clearColor: 0x000000,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.cameraParam = {
      fov: 45,
      near: .1,
      far: 10000,
      lookAt: new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0),
      x: 0,
      y: 0,
      z: 2400
    };
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.isInitialized = false;
    this.orbitcontrols = null;
    this.stats = null;
    this.isDev = false;
  }
  _createClass(Stage, [{
    key: "init",
    value: function init() {
      this._setScene();
      this._setRender();
      this._setCamera();
      // this._setDev();
    }
  }, {
    key: "_setScene",
    value: function _setScene() {
      this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
    }
  }, {
    key: "_setRender",
    value: function _setRender() {
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_2__.Color(this.renderParam.clearColor));
      this.renderer.setSize(this.renderParam.width, this.renderParam.height);
      var wrapper = document.querySelector("#webgl");
      wrapper.appendChild(this.renderer.domElement);
    }
  }, {
    key: "_setCamera",
    value: function _setCamera() {
      if (!this.isInitialized) {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(0, 0, this.cameraParam.near, this.cameraParam.far);
        this.camera.position.set(this.cameraParam.x, this.cameraParam.y, this.cameraParam.z);
        this.camera.lookAt(this.cameraParam.lookAt);
        this.isInitialized = true;
      }
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      this.camera.aspect = windowWidth / windowHeight;
      this.camera.fov = this.cameraParam.fov;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(windowWidth, windowHeight);
    }
  }, {
    key: "_setDev",
    value: function _setDev() {
      this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__.GridHelper(1000, 100));
      this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__.AxesHelper(100));
      this.orbitcontrols = new (three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1___default())(this.camera, this.renderer.domElement);
      this.orbitcontrols.enableDamping = true;
      this.stats = new (stats_js__WEBPACK_IMPORTED_MODULE_0___default())();
      this.stats.domElement.style.position = "absolute";
      this.stats.domElement.style.left = "0px";
      this.stats.domElement.style.right = "0px";
      document.getElementById("stats").appendChild(this.stats.domElement);
      this.isDev = true;
    }
  }, {
    key: "_render",
    value: function _render() {
      this.renderer.render(this.scene, this.camera);
      if (this.isDev) this.stats.update();
      if (this.isDev) this.orbitcontrols.update();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this._setCamera();
    }
  }, {
    key: "onRaf",
    value: function onRaf() {
      this._render();
    }
  }]);
  return Stage;
}();


/***/ }),

/***/ "./src/assets/stylesheets/app.scss":
/*!*****************************************!*\
  !*** ./src/assets/stylesheets/app.scss ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: PostCSS received undefined instead of CSS string\n    at new Input (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\input.js:24:13)\n    at parse (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\parse.js:8:15)\n    at new LazyResult (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\lazy-result.js:133:16)\n    at Processor.process (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\processor.js:28:14)\n    at Object.loader (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss-loader\\dist\\index.js:84:30)\n    at tryRunOrWebpackError (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5066:12)\n    at __webpack_require__ (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5023:18)\n    at C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5094:20\n    at symbolIterator (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5001:43\n    at symbolIterator (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\neo-async\\async.js:3482:9)\n-- inner error --\nError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: PostCSS received undefined instead of CSS string\n    at new Input (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\input.js:24:13)\n    at parse (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\parse.js:8:15)\n    at new LazyResult (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\lazy-result.js:133:16)\n    at Processor.process (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss\\lib\\processor.js:28:14)\n    at Object.loader (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss-loader\\dist\\index.js:84:30)\n    at Object.<anonymous> (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\jonma0107\\Desktop\\memories\\src\\assets\\stylesheets\\app.scss:1:7)\n    at C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:439:10\n    at Hook.eval [as call] (eval at create (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5068:39\n    at tryRunOrWebpackError (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5066:12)\n    at __webpack_require__ (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5023:18)\n    at C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\webpack\\lib\\Compilation.js:5094:20\n    at symbolIterator (C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\neo-async\\async.js:3485:9)\n\nGenerated code for C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\Users\\jonma0107\\Desktop\\memories\\node_modules\\sass-loader\\dist\\cjs.js!C:\\Users\\jonma0107\\Desktop\\memories\\src\\assets\\stylesheets\\app.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\\nError: PostCSS received undefined instead of CSS string\\n    at new Input (C:\\\\Users\\\\jonma0107\\\\Desktop\\\\memories\\\\node_modules\\\\postcss\\\\lib\\\\input.js:24:13)\\n    at parse (C:\\\\Users\\\\jonma0107\\\\Desktop\\\\memories\\\\node_modules\\\\postcss\\\\lib\\\\parse.js:8:15)\\n    at new LazyResult (C:\\\\Users\\\\jonma0107\\\\Desktop\\\\memories\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:133:16)\\n    at Processor.process (C:\\\\Users\\\\jonma0107\\\\Desktop\\\\memories\\\\node_modules\\\\postcss\\\\lib\\\\processor.js:28:14)\\n    at Object.loader (C:\\\\Users\\\\jonma0107\\\\Desktop\\\\memories\\\\node_modules\\\\postcss-loader\\\\dist\\\\index.js:84:30)\");");

/***/ }),

/***/ "./src/assets/scripts/shaders/fragmentshader.frag":
/*!********************************************************!*\
  !*** ./src/assets/scripts/shaders/fragmentshader.frag ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision mediump float;\n#define GLSLIFY 1\n\nuniform float colorLevel_1;\nuniform float colorLevel_2;\nuniform float colorLevel_3;\n\nvarying vec3 v_color_1;\nvarying vec3 v_color_2;\nvarying vec3 v_color_3;\n\nvoid main() {\n    vec3 imageColor_1 = v_color_1 * colorLevel_1;\n    vec3 imageColor_2 = v_color_2 * colorLevel_2;\n    vec3 imageColor_3 = v_color_3 * colorLevel_3;\n    vec3 imageColorAll = imageColor_1 + imageColor_2 + imageColor_3;\n    if ( imageColorAll.r < 0.01 && imageColorAll.g < 0.01 && imageColorAll.b < 0.01 ) discard;\n    gl_FragColor = vec4(imageColorAll,1.0);\n}");

/***/ }),

/***/ "./src/assets/scripts/shaders/vertexshader.vert":
/*!******************************************************!*\
  !*** ./src/assets/scripts/shaders/vertexshader.vert ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 color_1;\nattribute vec3 color_2;\nattribute vec3 color_3;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float noiseRangeX;\nuniform float noiseRangeY;\nuniform float noiseRangeZ;\nuniform float distortionLevel;\nuniform float distortionRange;\nuniform float time;\nvarying vec3 v_color_1;\nvarying vec3 v_color_2;\nvarying vec3 v_color_3;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n    v_color_1 = color_1;\n    v_color_2 = color_2;\n    v_color_3 = color_3;\n    float noiseX = position.x * noiseRangeX + time;\n    float noiseY = position.y * noiseRangeY + time;\n    float noiseZ = (position.x + position.y) * noiseRangeZ + time;\n    vec3 distortionPosition = position * snoise(vec3(noiseX, noiseY, noiseZ)) * distortionLevel * distortionRange;\n    vec3 resultPosition = position + distortionPosition;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(resultPosition, 1.0 );\n    gl_PointSize = 2.0;\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_creativesite_boilerplate"] = self["webpackChunkwebpack_creativesite_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/assets/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/assets/stylesheets/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map
// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import { gsap } from 'gsap'
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

const body = document.querySelector('body')
	cx = window.innerWidth / 2,
	cy = window.innerHeight / 2
	
	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		// console.log(e.pageX + ' / ' + e.pageY)

		request = requestAnimationFrame(updateMe)

	})

	function updateMe() {
		dx = clientX - cx
		dy = clientY - cy
		tiltx = dy / cy
		tilty = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 12
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`})
	}

})

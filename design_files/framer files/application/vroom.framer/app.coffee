# Import file "vroom"
sketch = Framer.Importer.load("imported/vroom@1x", scale: 1)

# initial values
sketch.Splash.visible = true;
sketch.Splash.opacity = 1;
sketch.Splash.z = 1;

sketch.Sign_In.visible = true;
sketch.Sign_In.opacity = 0;
sketch.Sign_In.x = 0;
sketch.Sign_In.y = 0;
sketch.Sign_In.z = 0;

sketch.Onboarding_One.visible = true;
sketch.Onboarding_One.opacity = 0;
sketch.Onboarding_One.x = 0;
sketch.Onboarding_One.y = 0;
sketch.Onboarding_One.z = -1;

sketch.Splash.onTap ->
	sketch.Splash.animate
		opacity: 0
		y: -100
		options: 
			time: 1.00
			curve: Spring
			
	sketch.Sign_In.animate
		opacity: 1
		options: 
			time: 1.00
			curve: Spring
			
sketch.Form.onTap ->
	sketch.Sign_In.animate
		x: -400
		options: 
			time: 1.00
			curve: Spring
			
	sketch.Onboarding_One.animate
		opacity: 1
		options: 
			time: 1.00
			curve: Spring
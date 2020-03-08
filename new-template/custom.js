                     // start scroll page js for sticky navbar
                        window.onscroll = function() {myFunction()};
                        
                        var header = document.getElementById("myHeader");
                        var sticky = header.offsetTop;
                        
                        function myFunction() {
                            if (window.pageYOffset > sticky) {
                                header.classList.add("sticky");
                                header.style ="background-color:#fff;";
                               
                            } else {
                                header.classList.remove("sticky");
                                header.style ="background-color: rgba(85, 85, 85, 0.01);";
                            }
                        }
                        $('ul.nav').find('a').click(function(){
                            var $href = $(this).attr('href');
                            var $anchor = $('#'+$href).offset();
                            window.scrollTo($anchor.left,$anchor.top);
                            header.style ="background-color:#fff;";
                            return false;
                        });
                    // end scroll page js for sticky navbar
                    
                    //  start wheel animation js
                        
                        var tmpAnimation = 0;
                        $("#btn-next").click(function(){
                            var element = $("#ship-steering");
                            tmpAnimation = tmpAnimation + 45;
                            
                            $({degrees: tmpAnimation - 45}).animate({degrees: tmpAnimation}, {
                                duration: 1000,
                                step: function(now) {
                                    element.css({
                                        transform: 'rotate(' + now + 'deg)'
                                    });
                                }
                            });
                        });
                        $("#btn-prev").click(function(){
                            var element = $("#ship-steering");
                            tmpAnimation = tmpAnimation - 45;
                            
                            $({degrees: tmpAnimation + 45}).animate({degrees: tmpAnimation}, {
                                duration: 1000,
                                step: function(now) {
                                    element.css({
                                        transform: 'rotate(' + now + 'deg)'
                                    });
                                }
                            });
                        });
                        
                //   
                        var slideIndex = 1;
                        showSlides(slideIndex);
                        
                        function plusSlides(n) {
                            showSlides(slideIndex += n);
                        }
                        
                        function currentSlide(n) {
                            showSlides(slideIndex = n);
                        }
                        
                        function showSlides(n) {
                            var i;
                            var slides = document.getElementsByClassName("mySlides");
                            var dots = document.getElementsByClassName("dot");
                            if (n > slides.length) {slideIndex = 1}
                            if (n < 1) {slideIndex = slides.length}
                            for (i = 0; i < slides.length; i++) {
                                slides[i].style.display = "none";
                            }
                            for (i = 0; i < dots.length; i++) {
                                dots[i].className = dots[i].className.replace(" active", "");
                            }
                            slides[slideIndex-1].style.display = "block";
                            dots[slideIndex-1].className += " active";
                        }
                    
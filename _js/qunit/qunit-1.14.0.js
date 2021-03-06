/ * ! 
   *   Q U n i t   1 . 1 4 . 0 
   *   h t t p : / / q u n i t j s . c o m / 
   * 
   *   C o p y r i g h t   2 0 1 3   j Q u e r y   F o u n d a t i o n   a n d   o t h e r   c o n t r i b u t o r s 
   *   R e l e a s e d   u n d e r   t h e   M I T   l i c e n s e 
   *   h t t p : / / j q u e r y . o r g / l i c e n s e 
   * 
   *   D a t e :   2 0 1 4 - 0 1 - 3 1 T 1 6 : 4 0 Z 
   * / 
 
 ( f u n c t i o n (   w i n d o w   )   { 
 
 v a r   Q U n i t , 
 	 a s s e r t , 
 	 c o n f i g , 
 	 o n E r r o r F n P r e v , 
 	 t e s t I d   =   0 , 
 	 f i l e N a m e   =   ( s o u r c e F r o m S t a c k t r a c e (   0   )   | |   " "   ) . r e p l a c e ( / ( : \ d + ) + \ ) ? / ,   " " ) . r e p l a c e ( / . + \ / / ,   " " ) , 
 	 t o S t r i n g   =   O b j e c t . p r o t o t y p e . t o S t r i n g , 
 	 h a s O w n   =   O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y , 
 	 / /   K e e p   a   l o c a l   r e f e r e n c e   t o   D a t e   ( G H - 2 8 3 ) 
 	 D a t e   =   w i n d o w . D a t e , 
 	 s e t T i m e o u t   =   w i n d o w . s e t T i m e o u t , 
 	 c l e a r T i m e o u t   =   w i n d o w . c l e a r T i m e o u t , 
 	 d e f i n e d   =   { 
 	 	 d o c u m e n t :   t y p e o f   w i n d o w . d o c u m e n t   ! = =   " u n d e f i n e d " , 
 	 	 s e t T i m e o u t :   t y p e o f   w i n d o w . s e t T i m e o u t   ! = =   " u n d e f i n e d " , 
 	 	 s e s s i o n S t o r a g e :   ( f u n c t i o n ( )   { 
 	 	 	 v a r   x   =   " q u n i t - t e s t - s t r i n g " ; 
 	 	 	 t r y   { 
 	 	 	 	 s e s s i o n S t o r a g e . s e t I t e m (   x ,   x   ) ; 
 	 	 	 	 s e s s i o n S t o r a g e . r e m o v e I t e m (   x   ) ; 
 	 	 	 	 r e t u r n   t r u e ; 
 	 	 	 }   c a t c h (   e   )   { 
 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 } 
 	 	 } ( ) ) 
 	 } , 
 	 / * * 
 	   *   P r o v i d e s   a   n o r m a l i z e d   e r r o r   s t r i n g ,   c o r r e c t i n g   a n   i s s u e 
 	   *   w i t h   I E   7   ( a n d   p r i o r )   w h e r e   E r r o r . p r o t o t y p e . t o S t r i n g   i s 
 	   *   n o t   p r o p e r l y   i m p l e m e n t e d 
 	   * 
 	   *   B a s e d   o n   h t t p : / / e s 5 . g i t h u b . c o m / # x 1 5 . 1 1 . 4 . 4 
 	   * 
 	   *   @ p a r a m   { S t r i n g | E r r o r }   e r r o r 
 	   *   @ r e t u r n   { S t r i n g }   e r r o r   m e s s a g e 
 	   * / 
 	 e r r o r S t r i n g   =   f u n c t i o n (   e r r o r   )   { 
 	 	 v a r   n a m e ,   m e s s a g e , 
 	 	 	 e r r o r S t r i n g   =   e r r o r . t o S t r i n g ( ) ; 
 	 	 i f   (   e r r o r S t r i n g . s u b s t r i n g (   0 ,   7   )   = = =   " [ o b j e c t "   )   { 
 	 	 	 n a m e   =   e r r o r . n a m e   ?   e r r o r . n a m e . t o S t r i n g ( )   :   " E r r o r " ; 
 	 	 	 m e s s a g e   =   e r r o r . m e s s a g e   ?   e r r o r . m e s s a g e . t o S t r i n g ( )   :   " " ; 
 	 	 	 i f   (   n a m e   & &   m e s s a g e   )   { 
 	 	 	 	 r e t u r n   n a m e   +   " :   "   +   m e s s a g e ; 
 	 	 	 }   e l s e   i f   (   n a m e   )   { 
 	 	 	 	 r e t u r n   n a m e ; 
 	 	 	 }   e l s e   i f   (   m e s s a g e   )   { 
 	 	 	 	 r e t u r n   m e s s a g e ; 
 	 	 	 }   e l s e   { 
 	 	 	 	 r e t u r n   " E r r o r " ; 
 	 	 	 } 
 	 	 }   e l s e   { 
 	 	 	 r e t u r n   e r r o r S t r i n g ; 
 	 	 } 
 	 } , 
 	 / * * 
 	   *   M a k e s   a   c l o n e   o f   a n   o b j e c t   u s i n g   o n l y   A r r a y   o r   O b j e c t   a s   b a s e , 
 	   *   a n d   c o p i e s   o v e r   t h e   o w n   e n u m e r a b l e   p r o p e r t i e s . 
 	   * 
 	   *   @ p a r a m   { O b j e c t }   o b j 
 	   *   @ r e t u r n   { O b j e c t }   N e w   o b j e c t   w i t h   o n l y   t h e   o w n   p r o p e r t i e s   ( r e c u r s i v e l y ) . 
 	   * / 
 	 o b j e c t V a l u e s   =   f u n c t i o n (   o b j   )   { 
 	 	 / /   G r u n t   0 . 3 . x   u s e s   a n   o l d e r   v e r s i o n   o f   j s h i n t   t h a t   s t i l l   h a s   j s h i n t / j s h i n t # 3 9 2 . 
 	 	 / * j s h i n t   n e w c a p :   f a l s e   * / 
 	 	 v a r   k e y ,   v a l , 
 	 	 	 v a l s   =   Q U n i t . i s (   " a r r a y " ,   o b j   )   ?   [ ]   :   { } ; 
 	 	 f o r   (   k e y   i n   o b j   )   { 
 	 	 	 i f   (   h a s O w n . c a l l (   o b j ,   k e y   )   )   { 
 	 	 	 	 v a l   =   o b j [ k e y ] ; 
 	 	 	 	 v a l s [ k e y ]   =   v a l   = = =   O b j e c t ( v a l )   ?   o b j e c t V a l u e s ( v a l )   :   v a l ; 
 	 	 	 } 
 	 	 } 
 	 	 r e t u r n   v a l s ; 
 	 } ; 
 
 
 / /   R o o t   Q U n i t   o b j e c t . 
 / /   ` Q U n i t `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 Q U n i t   =   { 
 
 	 / /   c a l l   o n   s t a r t   o f   m o d u l e   t e s t   t o   p r e p e n d   n a m e   t o   a l l   t e s t s 
 	 m o d u l e :   f u n c t i o n (   n a m e ,   t e s t E n v i r o n m e n t   )   { 
 	 	 c o n f i g . c u r r e n t M o d u l e   =   n a m e ; 
 	 	 c o n f i g . c u r r e n t M o d u l e T e s t E n v i r o n m e n t   =   t e s t E n v i r o n m e n t ; 
 	 	 c o n f i g . m o d u l e s [ n a m e ]   =   t r u e ; 
 	 } , 
 
 	 a s y n c T e s t :   f u n c t i o n (   t e s t N a m e ,   e x p e c t e d ,   c a l l b a c k   )   { 
 	 	 i f   (   a r g u m e n t s . l e n g t h   = = =   2   )   { 
 	 	 	 c a l l b a c k   =   e x p e c t e d ; 
 	 	 	 e x p e c t e d   =   n u l l ; 
 	 	 } 
 
 	 	 Q U n i t . t e s t (   t e s t N a m e ,   e x p e c t e d ,   c a l l b a c k ,   t r u e   ) ; 
 	 } , 
 
 	 t e s t :   f u n c t i o n (   t e s t N a m e ,   e x p e c t e d ,   c a l l b a c k ,   a s y n c   )   { 
 	 	 v a r   t e s t , 
 	 	 	 n a m e H t m l   =   " < s p a n   c l a s s = ' t e s t - n a m e ' > "   +   e s c a p e T e x t (   t e s t N a m e   )   +   " < / s p a n > " ; 
 
 	 	 i f   (   a r g u m e n t s . l e n g t h   = = =   2   )   { 
 	 	 	 c a l l b a c k   =   e x p e c t e d ; 
 	 	 	 e x p e c t e d   =   n u l l ; 
 	 	 } 
 
 	 	 i f   (   c o n f i g . c u r r e n t M o d u l e   )   { 
 	 	 	 n a m e H t m l   =   " < s p a n   c l a s s = ' m o d u l e - n a m e ' > "   +   e s c a p e T e x t (   c o n f i g . c u r r e n t M o d u l e   )   +   " < / s p a n > :   "   +   n a m e H t m l ; 
 	 	 } 
 
 	 	 t e s t   =   n e w   T e s t ( { 
 	 	 	 n a m e H t m l :   n a m e H t m l , 
 	 	 	 t e s t N a m e :   t e s t N a m e , 
 	 	 	 e x p e c t e d :   e x p e c t e d , 
 	 	 	 a s y n c :   a s y n c , 
 	 	 	 c a l l b a c k :   c a l l b a c k , 
 	 	 	 m o d u l e :   c o n f i g . c u r r e n t M o d u l e , 
 	 	 	 m o d u l e T e s t E n v i r o n m e n t :   c o n f i g . c u r r e n t M o d u l e T e s t E n v i r o n m e n t , 
 	 	 	 s t a c k :   s o u r c e F r o m S t a c k t r a c e (   2   ) 
 	 	 } ) ; 
 
 	 	 i f   (   ! v a l i d T e s t (   t e s t   )   )   { 
 	 	 	 r e t u r n ; 
 	 	 } 
 
 	 	 t e s t . q u e u e ( ) ; 
 	 } , 
 
 	 / /   S p e c i f y   t h e   n u m b e r   o f   e x p e c t e d   a s s e r t i o n s   t o   g u a r a n t e e   t h a t   f a i l e d   t e s t   ( n o   a s s e r t i o n s   a r e   r u n   a t   a l l )   d o n ' t   s l i p   t h r o u g h . 
 	 e x p e c t :   f u n c t i o n (   a s s e r t s   )   { 
 	 	 i f   ( a r g u m e n t s . l e n g t h   = = =   1 )   { 
 	 	 	 c o n f i g . c u r r e n t . e x p e c t e d   =   a s s e r t s ; 
 	 	 }   e l s e   { 
 	 	 	 r e t u r n   c o n f i g . c u r r e n t . e x p e c t e d ; 
 	 	 } 
 	 } , 
 
 	 s t a r t :   f u n c t i o n (   c o u n t   )   { 
 	 	 / /   Q U n i t   h a s n ' t   b e e n   i n i t i a l i z e d   y e t . 
 	 	 / /   N o t e :   R e q u i r e J S   ( e t   a l )   m a y   d e l a y   o n L o a d 
 	 	 i f   (   c o n f i g . s e m a p h o r e   = = =   u n d e f i n e d   )   { 
 	 	 	 Q U n i t . b e g i n ( f u n c t i o n ( )   { 
 	 	 	 	 / /   T h i s   i s   t r i g g e r e d   a t   t h e   t o p   o f   Q U n i t . l o a d ,   p u s h   s t a r t ( )   t o   t h e   e v e n t   l o o p ,   t o   a l l o w   Q U n i t . l o a d   t o   f i n i s h   f i r s t 
 	 	 	 	 s e t T i m e o u t ( f u n c t i o n ( )   { 
 	 	 	 	 	 Q U n i t . s t a r t (   c o u n t   ) ; 
 	 	 	 	 } ) ; 
 	 	 	 } ) ; 
 	 	 	 r e t u r n ; 
 	 	 } 
 
 	 	 c o n f i g . s e m a p h o r e   - =   c o u n t   | |   1 ; 
 	 	 / /   d o n ' t   s t a r t   u n t i l   e q u a l   n u m b e r   o f   s t o p - c a l l s 
 	 	 i f   (   c o n f i g . s e m a p h o r e   >   0   )   { 
 	 	 	 r e t u r n ; 
 	 	 } 
 	 	 / /   i g n o r e   i f   s t a r t   i s   c a l l e d   m o r e   o f t e n   t h e n   s t o p 
 	 	 i f   (   c o n f i g . s e m a p h o r e   <   0   )   { 
 	 	 	 c o n f i g . s e m a p h o r e   =   0 ; 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " C a l l e d   s t a r t ( )   w h i l e   a l r e a d y   s t a r t e d   ( Q U n i t . c o n f i g . s e m a p h o r e   w a s   0   a l r e a d y ) " ,   n u l l ,   s o u r c e F r o m S t a c k t r a c e ( 2 )   ) ; 
 	 	 	 r e t u r n ; 
 	 	 } 
 	 	 / /   A   s l i g h t   d e l a y ,   t o   a v o i d   a n y   c u r r e n t   c a l l b a c k s 
 	 	 i f   (   d e f i n e d . s e t T i m e o u t   )   { 
 	 	 	 s e t T i m e o u t ( f u n c t i o n ( )   { 
 	 	 	 	 i f   (   c o n f i g . s e m a p h o r e   >   0   )   { 
 	 	 	 	 	 r e t u r n ; 
 	 	 	 	 } 
 	 	 	 	 i f   (   c o n f i g . t i m e o u t   )   { 
 	 	 	 	 	 c l e a r T i m e o u t (   c o n f i g . t i m e o u t   ) ; 
 	 	 	 	 } 
 
 	 	 	 	 c o n f i g . b l o c k i n g   =   f a l s e ; 
 	 	 	 	 p r o c e s s (   t r u e   ) ; 
 	 	 	 } ,   1 3 ) ; 
 	 	 }   e l s e   { 
 	 	 	 c o n f i g . b l o c k i n g   =   f a l s e ; 
 	 	 	 p r o c e s s (   t r u e   ) ; 
 	 	 } 
 	 } , 
 
 	 s t o p :   f u n c t i o n (   c o u n t   )   { 
 	 	 c o n f i g . s e m a p h o r e   + =   c o u n t   | |   1 ; 
 	 	 c o n f i g . b l o c k i n g   =   t r u e ; 
 
 	 	 i f   (   c o n f i g . t e s t T i m e o u t   & &   d e f i n e d . s e t T i m e o u t   )   { 
 	 	 	 c l e a r T i m e o u t (   c o n f i g . t i m e o u t   ) ; 
 	 	 	 c o n f i g . t i m e o u t   =   s e t T i m e o u t ( f u n c t i o n ( )   { 
 	 	 	 	 Q U n i t . o k (   f a l s e ,   " T e s t   t i m e d   o u t "   ) ; 
 	 	 	 	 c o n f i g . s e m a p h o r e   =   1 ; 
 	 	 	 	 Q U n i t . s t a r t ( ) ; 
 	 	 	 } ,   c o n f i g . t e s t T i m e o u t   ) ; 
 	 	 } 
 	 } 
 } ; 
 
 / /   W e   u s e   t h e   p r o t o t y p e   t o   d i s t i n g u i s h   b e t w e e n   p r o p e r t i e s   t h a t   s h o u l d 
 / /   b e   e x p o s e d   a s   g l o b a l s   ( a n d   i n   e x p o r t s )   a n d   t h o s e   t h a t   s h o u l d n ' t 
 ( f u n c t i o n ( )   { 
 	 f u n c t i o n   F ( )   { } 
 	 F . p r o t o t y p e   =   Q U n i t ; 
 	 Q U n i t   =   n e w   F ( ) ; 
 	 / /   M a k e   F   Q U n i t ' s   c o n s t r u c t o r   s o   t h a t   w e   c a n   a d d   t o   t h e   p r o t o t y p e   l a t e r 
 	 Q U n i t . c o n s t r u c t o r   =   F ; 
 } ( ) ) ; 
 
 / * * 
   *   C o n f i g   o b j e c t :   M a i n t a i n   i n t e r n a l   s t a t e 
   *   L a t e r   e x p o s e d   a s   Q U n i t . c o n f i g 
   *   ` c o n f i g `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
   * / 
 c o n f i g   =   { 
 	 / /   T h e   q u e u e   o f   t e s t s   t o   r u n 
 	 q u e u e :   [ ] , 
 
 	 / /   b l o c k   u n t i l   d o c u m e n t   r e a d y 
 	 b l o c k i n g :   t r u e , 
 
 	 / /   w h e n   e n a b l e d ,   s h o w   o n l y   f a i l i n g   t e s t s 
 	 / /   g e t s   p e r s i s t e d   t h r o u g h   s e s s i o n S t o r a g e   a n d   c a n   b e   c h a n g e d   i n   U I   v i a   c h e c k b o x 
 	 h i d e p a s s e d :   f a l s e , 
 
 	 / /   b y   d e f a u l t ,   r u n   p r e v i o u s l y   f a i l e d   t e s t s   f i r s t 
 	 / /   v e r y   u s e f u l   i n   c o m b i n a t i o n   w i t h   " H i d e   p a s s e d   t e s t s "   c h e c k e d 
 	 r e o r d e r :   t r u e , 
 
 	 / /   b y   d e f a u l t ,   m o d i f y   d o c u m e n t . t i t l e   w h e n   s u i t e   i s   d o n e 
 	 a l t e r t i t l e :   t r u e , 
 
 	 / /   b y   d e f a u l t ,   s c r o l l   t o   t o p   o f   t h e   p a g e   w h e n   s u i t e   i s   d o n e 
 	 s c r o l l t o p :   t r u e , 
 
 	 / /   w h e n   e n a b l e d ,   a l l   t e s t s   m u s t   c a l l   e x p e c t ( ) 
 	 r e q u i r e E x p e c t s :   f a l s e , 
 
 	 / /   a d d   c h e c k b o x e s   t h a t   a r e   p e r s i s t e d   i n   t h e   q u e r y - s t r i n g 
 	 / /   w h e n   e n a b l e d ,   t h e   i d   i s   s e t   t o   ` t r u e `   a s   a   ` Q U n i t . c o n f i g `   p r o p e r t y 
 	 u r l C o n f i g :   [ 
 	 	 { 
 	 	 	 i d :   " n o g l o b a l s " , 
 	 	 	 l a b e l :   " C h e c k   f o r   G l o b a l s " , 
 	 	 	 t o o l t i p :   " E n a b l i n g   t h i s   w i l l   t e s t   i f   a n y   t e s t   i n t r o d u c e s   n e w   p r o p e r t i e s   o n   t h e   ` w i n d o w `   o b j e c t .   S t o r e d   a s   q u e r y - s t r i n g s . " 
 	 	 } , 
 	 	 { 
 	 	 	 i d :   " n o t r y c a t c h " , 
 	 	 	 l a b e l :   " N o   t r y - c a t c h " , 
 	 	 	 t o o l t i p :   " E n a b l i n g   t h i s   w i l l   r u n   t e s t s   o u t s i d e   o f   a   t r y - c a t c h   b l o c k .   M a k e s   d e b u g g i n g   e x c e p t i o n s   i n   I E   r e a s o n a b l e .   S t o r e d   a s   q u e r y - s t r i n g s . " 
 	 	 } 
 	 ] , 
 
 	 / /   S e t   o f   a l l   m o d u l e s . 
 	 m o d u l e s :   { } , 
 
 	 / /   l o g g i n g   c a l l b a c k   q u e u e s 
 	 b e g i n :   [ ] , 
 	 d o n e :   [ ] , 
 	 l o g :   [ ] , 
 	 t e s t S t a r t :   [ ] , 
 	 t e s t D o n e :   [ ] , 
 	 m o d u l e S t a r t :   [ ] , 
 	 m o d u l e D o n e :   [ ] 
 } ; 
 
 / /   I n i t i a l i z e   m o r e   Q U n i t . c o n f i g   a n d   Q U n i t . u r l P a r a m s 
 ( f u n c t i o n ( )   { 
 	 v a r   i ,   c u r r e n t , 
 	 	 l o c a t i o n   =   w i n d o w . l o c a t i o n   | |   {   s e a r c h :   " " ,   p r o t o c o l :   " f i l e : "   } , 
 	 	 p a r a m s   =   l o c a t i o n . s e a r c h . s l i c e (   1   ) . s p l i t (   " & "   ) , 
 	 	 l e n g t h   =   p a r a m s . l e n g t h , 
 	 	 u r l P a r a m s   =   { } ; 
 
 	 i f   (   p a r a m s [   0   ]   )   { 
 	 	 f o r   (   i   =   0 ;   i   <   l e n g t h ;   i + +   )   { 
 	 	 	 c u r r e n t   =   p a r a m s [   i   ] . s p l i t (   " = "   ) ; 
 	 	 	 c u r r e n t [   0   ]   =   d e c o d e U R I C o m p o n e n t (   c u r r e n t [   0   ]   ) ; 
 
 	 	 	 / /   a l l o w   j u s t   a   k e y   t o   t u r n   o n   a   f l a g ,   e . g . ,   t e s t . h t m l ? n o g l o b a l s 
 	 	 	 c u r r e n t [   1   ]   =   c u r r e n t [   1   ]   ?   d e c o d e U R I C o m p o n e n t (   c u r r e n t [   1   ]   )   :   t r u e ; 
 	 	 	 i f   (   u r l P a r a m s [   c u r r e n t [   0   ]   ]   )   { 
 	 	 	 	 u r l P a r a m s [   c u r r e n t [   0   ]   ]   =   [ ] . c o n c a t (   u r l P a r a m s [   c u r r e n t [   0   ]   ] ,   c u r r e n t [   1   ]   ) ; 
 	 	 	 }   e l s e   { 
 	 	 	 	 u r l P a r a m s [   c u r r e n t [   0   ]   ]   =   c u r r e n t [   1   ] ; 
 	 	 	 } 
 	 	 } 
 	 } 
 
 	 Q U n i t . u r l P a r a m s   =   u r l P a r a m s ; 
 
 	 / /   S t r i n g   s e a r c h   a n y w h e r e   i n   m o d u l e N a m e + t e s t N a m e 
 	 c o n f i g . f i l t e r   =   u r l P a r a m s . f i l t e r ; 
 
 	 / /   E x a c t   m a t c h   o f   t h e   m o d u l e   n a m e 
 	 c o n f i g . m o d u l e   =   u r l P a r a m s . m o d u l e ; 
 
 	 c o n f i g . t e s t N u m b e r   =   [ ] ; 
 	 i f   (   u r l P a r a m s . t e s t N u m b e r   )   { 
 
 	 	 / /   E n s u r e   t h a t   u r l P a r a m s . t e s t N u m b e r   i s   a n   a r r a y 
 	 	 u r l P a r a m s . t e s t N u m b e r   =   [ ] . c o n c a t (   u r l P a r a m s . t e s t N u m b e r   ) ; 
 	 	 f o r   (   i   =   0 ;   i   <   u r l P a r a m s . t e s t N u m b e r . l e n g t h ;   i + +   )   { 
 	 	 	 c u r r e n t   =   u r l P a r a m s . t e s t N u m b e r [   i   ] ; 
 	 	 	 c o n f i g . t e s t N u m b e r . p u s h (   p a r s e I n t (   c u r r e n t ,   1 0   )   ) ; 
 	 	 } 
 	 } 
 
 	 / /   F i g u r e   o u t   i f   w e ' r e   r u n n i n g   t h e   t e s t s   f r o m   a   s e r v e r   o r   n o t 
 	 Q U n i t . i s L o c a l   =   l o c a t i o n . p r o t o c o l   = = =   " f i l e : " ; 
 } ( ) ) ; 
 
 e x t e n d (   Q U n i t ,   { 
 
 	 c o n f i g :   c o n f i g , 
 
 	 / /   I n i t i a l i z e   t h e   c o n f i g u r a t i o n   o p t i o n s 
 	 i n i t :   f u n c t i o n ( )   { 
 	 	 e x t e n d (   c o n f i g ,   { 
 	 	 	 s t a t s :   {   a l l :   0 ,   b a d :   0   } , 
 	 	 	 m o d u l e S t a t s :   {   a l l :   0 ,   b a d :   0   } , 
 	 	 	 s t a r t e d :   + n e w   D a t e ( ) , 
 	 	 	 u p d a t e R a t e :   1 0 0 0 , 
 	 	 	 b l o c k i n g :   f a l s e , 
 	 	 	 a u t o s t a r t :   t r u e , 
 	 	 	 a u t o r u n :   f a l s e , 
 	 	 	 f i l t e r :   " " , 
 	 	 	 q u e u e :   [ ] , 
 	 	 	 s e m a p h o r e :   1 
 	 	 } ) ; 
 
 	 	 v a r   t e s t s ,   b a n n e r ,   r e s u l t , 
 	 	 	 q u n i t   =   i d (   " q u n i t "   ) ; 
 
 	 	 i f   (   q u n i t   )   { 
 	 	 	 q u n i t . i n n e r H T M L   = 
 	 	 	 	 " < h 1   i d = ' q u n i t - h e a d e r ' > "   +   e s c a p e T e x t (   d o c u m e n t . t i t l e   )   +   " < / h 1 > "   + 
 	 	 	 	 " < h 2   i d = ' q u n i t - b a n n e r ' > < / h 2 > "   + 
 	 	 	 	 " < d i v   i d = ' q u n i t - t e s t r u n n e r - t o o l b a r ' > < / d i v > "   + 
 	 	 	 	 " < h 2   i d = ' q u n i t - u s e r A g e n t ' > < / h 2 > "   + 
 	 	 	 	 " < o l   i d = ' q u n i t - t e s t s ' > < / o l > " ; 
 	 	 } 
 
 	 	 t e s t s   =   i d (   " q u n i t - t e s t s "   ) ; 
 	 	 b a n n e r   =   i d (   " q u n i t - b a n n e r "   ) ; 
 	 	 r e s u l t   =   i d (   " q u n i t - t e s t r e s u l t "   ) ; 
 
 	 	 i f   (   t e s t s   )   { 
 	 	 	 t e s t s . i n n e r H T M L   =   " " ; 
 	 	 } 
 
 	 	 i f   (   b a n n e r   )   { 
 	 	 	 b a n n e r . c l a s s N a m e   =   " " ; 
 	 	 } 
 
 	 	 i f   (   r e s u l t   )   { 
 	 	 	 r e s u l t . p a r e n t N o d e . r e m o v e C h i l d (   r e s u l t   ) ; 
 	 	 } 
 
 	 	 i f   (   t e s t s   )   { 
 	 	 	 r e s u l t   =   d o c u m e n t . c r e a t e E l e m e n t (   " p "   ) ; 
 	 	 	 r e s u l t . i d   =   " q u n i t - t e s t r e s u l t " ; 
 	 	 	 r e s u l t . c l a s s N a m e   =   " r e s u l t " ; 
 	 	 	 t e s t s . p a r e n t N o d e . i n s e r t B e f o r e (   r e s u l t ,   t e s t s   ) ; 
 	 	 	 r e s u l t . i n n e r H T M L   =   " R u n n i n g . . . < b r / > & n b s p ; " ; 
 	 	 } 
 	 } , 
 
 	 / /   R e s e t s   t h e   t e s t   s e t u p .   U s e f u l   f o r   t e s t s   t h a t   m o d i f y   t h e   D O M . 
 	 / * 
 	 D E P R E C A T E D :   U s e   m u l t i p l e   t e s t s   i n s t e a d   o f   r e s e t t i n g   i n s i d e   a   t e s t . 
 	 U s e   t e s t S t a r t   o r   t e s t D o n e   f o r   c u s t o m   c l e a n u p . 
 	 T h i s   m e t h o d   w i l l   t h r o w   a n   e r r o r   i n   2 . 0 ,   a n d   w i l l   b e   r e m o v e d   i n   2 . 1 
 	 * / 
 	 r e s e t :   f u n c t i o n ( )   { 
 	 	 v a r   f i x t u r e   =   i d (   " q u n i t - f i x t u r e "   ) ; 
 	 	 i f   (   f i x t u r e   )   { 
 	 	 	 f i x t u r e . i n n e r H T M L   =   c o n f i g . f i x t u r e ; 
 	 	 } 
 	 } , 
 
 	 / /   S a f e   o b j e c t   t y p e   c h e c k i n g 
 	 i s :   f u n c t i o n (   t y p e ,   o b j   )   { 
 	 	 r e t u r n   Q U n i t . o b j e c t T y p e (   o b j   )   = = =   t y p e ; 
 	 } , 
 
 	 o b j e c t T y p e :   f u n c t i o n (   o b j   )   { 
 	 	 i f   (   t y p e o f   o b j   = = =   " u n d e f i n e d "   )   { 
 	 	 	 r e t u r n   " u n d e f i n e d " ; 
 	 	 } 
 
 	 	 / /   C o n s i d e r :   t y p e o f   n u l l   = = =   o b j e c t 
 	 	 i f   (   o b j   = = =   n u l l   )   { 
 	 	 	 r e t u r n   " n u l l " ; 
 	 	 } 
 
 	 	 v a r   m a t c h   =   t o S t r i n g . c a l l (   o b j   ) . m a t c h ( / ^ \ [ o b j e c t \ s ( . * ) \ ] $ / ) , 
 	 	 	 t y p e   =   m a t c h   & &   m a t c h [ 1 ]   | |   " " ; 
 
 	 	 s w i t c h   (   t y p e   )   { 
 	 	 	 c a s e   " N u m b e r " : 
 	 	 	 	 i f   (   i s N a N ( o b j )   )   { 
 	 	 	 	 	 r e t u r n   " n a n " ; 
 	 	 	 	 } 
 	 	 	 	 r e t u r n   " n u m b e r " ; 
 	 	 	 c a s e   " S t r i n g " : 
 	 	 	 c a s e   " B o o l e a n " : 
 	 	 	 c a s e   " A r r a y " : 
 	 	 	 c a s e   " D a t e " : 
 	 	 	 c a s e   " R e g E x p " : 
 	 	 	 c a s e   " F u n c t i o n " : 
 	 	 	 	 r e t u r n   t y p e . t o L o w e r C a s e ( ) ; 
 	 	 } 
 	 	 i f   (   t y p e o f   o b j   = = =   " o b j e c t "   )   { 
 	 	 	 r e t u r n   " o b j e c t " ; 
 	 	 } 
 	 	 r e t u r n   u n d e f i n e d ; 
 	 } , 
 
 	 p u s h :   f u n c t i o n (   r e s u l t ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 i f   (   ! c o n f i g . c u r r e n t   )   { 
 	 	 	 t h r o w   n e w   E r r o r (   " a s s e r t i o n   o u t s i d e   t e s t   c o n t e x t ,   w a s   "   +   s o u r c e F r o m S t a c k t r a c e ( )   ) ; 
 	 	 } 
 
 	 	 v a r   o u t p u t ,   s o u r c e , 
 	 	 	 d e t a i l s   =   { 
 	 	 	 	 m o d u l e :   c o n f i g . c u r r e n t . m o d u l e , 
 	 	 	 	 n a m e :   c o n f i g . c u r r e n t . t e s t N a m e , 
 	 	 	 	 r e s u l t :   r e s u l t , 
 	 	 	 	 m e s s a g e :   m e s s a g e , 
 	 	 	 	 a c t u a l :   a c t u a l , 
 	 	 	 	 e x p e c t e d :   e x p e c t e d 
 	 	 	 } ; 
 
 	 	 m e s s a g e   =   e s c a p e T e x t (   m e s s a g e   )   | |   (   r e s u l t   ?   " o k a y "   :   " f a i l e d "   ) ; 
 	 	 m e s s a g e   =   " < s p a n   c l a s s = ' t e s t - m e s s a g e ' > "   +   m e s s a g e   +   " < / s p a n > " ; 
 	 	 o u t p u t   =   m e s s a g e ; 
 
 	 	 i f   (   ! r e s u l t   )   { 
 	 	 	 e x p e c t e d   =   e s c a p e T e x t (   Q U n i t . j s D u m p . p a r s e ( e x p e c t e d )   ) ; 
 	 	 	 a c t u a l   =   e s c a p e T e x t (   Q U n i t . j s D u m p . p a r s e ( a c t u a l )   ) ; 
 	 	 	 o u t p u t   + =   " < t a b l e > < t r   c l a s s = ' t e s t - e x p e c t e d ' > < t h > E x p e c t e d :   < / t h > < t d > < p r e > "   +   e x p e c t e d   +   " < / p r e > < / t d > < / t r > " ; 
 
 	 	 	 i f   (   a c t u a l   ! = =   e x p e c t e d   )   { 
 	 	 	 	 o u t p u t   + =   " < t r   c l a s s = ' t e s t - a c t u a l ' > < t h > R e s u l t :   < / t h > < t d > < p r e > "   +   a c t u a l   +   " < / p r e > < / t d > < / t r > " ; 
 	 	 	 	 o u t p u t   + =   " < t r   c l a s s = ' t e s t - d i f f ' > < t h > D i f f :   < / t h > < t d > < p r e > "   +   Q U n i t . d i f f (   e x p e c t e d ,   a c t u a l   )   +   " < / p r e > < / t d > < / t r > " ; 
 	 	 	 } 
 
 	 	 	 s o u r c e   =   s o u r c e F r o m S t a c k t r a c e ( ) ; 
 
 	 	 	 i f   (   s o u r c e   )   { 
 	 	 	 	 d e t a i l s . s o u r c e   =   s o u r c e ; 
 	 	 	 	 o u t p u t   + =   " < t r   c l a s s = ' t e s t - s o u r c e ' > < t h > S o u r c e :   < / t h > < t d > < p r e > "   +   e s c a p e T e x t (   s o u r c e   )   +   " < / p r e > < / t d > < / t r > " ; 
 	 	 	 } 
 
 	 	 	 o u t p u t   + =   " < / t a b l e > " ; 
 	 	 } 
 
 	 	 r u n L o g g i n g C a l l b a c k s (   " l o g " ,   Q U n i t ,   d e t a i l s   ) ; 
 
 	 	 c o n f i g . c u r r e n t . a s s e r t i o n s . p u s h ( { 
 	 	 	 r e s u l t :   ! ! r e s u l t , 
 	 	 	 m e s s a g e :   o u t p u t 
 	 	 } ) ; 
 	 } , 
 
 	 p u s h F a i l u r e :   f u n c t i o n (   m e s s a g e ,   s o u r c e ,   a c t u a l   )   { 
 	 	 i f   (   ! c o n f i g . c u r r e n t   )   { 
 	 	 	 t h r o w   n e w   E r r o r (   " p u s h F a i l u r e ( )   a s s e r t i o n   o u t s i d e   t e s t   c o n t e x t ,   w a s   "   +   s o u r c e F r o m S t a c k t r a c e ( 2 )   ) ; 
 	 	 } 
 
 	 	 v a r   o u t p u t , 
 	 	 	 d e t a i l s   =   { 
 	 	 	 	 m o d u l e :   c o n f i g . c u r r e n t . m o d u l e , 
 	 	 	 	 n a m e :   c o n f i g . c u r r e n t . t e s t N a m e , 
 	 	 	 	 r e s u l t :   f a l s e , 
 	 	 	 	 m e s s a g e :   m e s s a g e 
 	 	 	 } ; 
 
 	 	 m e s s a g e   =   e s c a p e T e x t (   m e s s a g e   )   | |   " e r r o r " ; 
 	 	 m e s s a g e   =   " < s p a n   c l a s s = ' t e s t - m e s s a g e ' > "   +   m e s s a g e   +   " < / s p a n > " ; 
 	 	 o u t p u t   =   m e s s a g e ; 
 
 	 	 o u t p u t   + =   " < t a b l e > " ; 
 
 	 	 i f   (   a c t u a l   )   { 
 	 	 	 o u t p u t   + =   " < t r   c l a s s = ' t e s t - a c t u a l ' > < t h > R e s u l t :   < / t h > < t d > < p r e > "   +   e s c a p e T e x t (   a c t u a l   )   +   " < / p r e > < / t d > < / t r > " ; 
 	 	 } 
 
 	 	 i f   (   s o u r c e   )   { 
 	 	 	 d e t a i l s . s o u r c e   =   s o u r c e ; 
 	 	 	 o u t p u t   + =   " < t r   c l a s s = ' t e s t - s o u r c e ' > < t h > S o u r c e :   < / t h > < t d > < p r e > "   +   e s c a p e T e x t (   s o u r c e   )   +   " < / p r e > < / t d > < / t r > " ; 
 	 	 } 
 
 	 	 o u t p u t   + =   " < / t a b l e > " ; 
 
 	 	 r u n L o g g i n g C a l l b a c k s (   " l o g " ,   Q U n i t ,   d e t a i l s   ) ; 
 
 	 	 c o n f i g . c u r r e n t . a s s e r t i o n s . p u s h ( { 
 	 	 	 r e s u l t :   f a l s e , 
 	 	 	 m e s s a g e :   o u t p u t 
 	 	 } ) ; 
 	 } , 
 
 	 u r l :   f u n c t i o n (   p a r a m s   )   { 
 	 	 p a r a m s   =   e x t e n d (   e x t e n d (   { } ,   Q U n i t . u r l P a r a m s   ) ,   p a r a m s   ) ; 
 	 	 v a r   k e y , 
 	 	 	 q u e r y s t r i n g   =   " ? " ; 
 
 	 	 f o r   (   k e y   i n   p a r a m s   )   { 
 	 	 	 i f   (   h a s O w n . c a l l (   p a r a m s ,   k e y   )   )   { 
 	 	 	 	 q u e r y s t r i n g   + =   e n c o d e U R I C o m p o n e n t (   k e y   )   +   " = "   + 
 	 	 	 	 	 e n c o d e U R I C o m p o n e n t (   p a r a m s [   k e y   ]   )   +   " & " ; 
 	 	 	 } 
 	 	 } 
 	 	 r e t u r n   w i n d o w . l o c a t i o n . p r o t o c o l   +   " / / "   +   w i n d o w . l o c a t i o n . h o s t   + 
 	 	 	 w i n d o w . l o c a t i o n . p a t h n a m e   +   q u e r y s t r i n g . s l i c e (   0 ,   - 1   ) ; 
 	 } , 
 
 	 e x t e n d :   e x t e n d , 
 	 i d :   i d , 
 	 a d d E v e n t :   a d d E v e n t , 
 	 a d d C l a s s :   a d d C l a s s , 
 	 h a s C l a s s :   h a s C l a s s , 
 	 r e m o v e C l a s s :   r e m o v e C l a s s 
 	 / /   l o a d ,   e q u i v ,   j s D u m p ,   d i f f :   A t t a c h e d   l a t e r 
 } ) ; 
 
 / * * 
   *   @ d e p r e c a t e d :   C r e a t e d   f o r   b a c k w a r d s   c o m p a t i b i l i t y   w i t h   t e s t   r u n n e r   t h a t   s e t   t h e   h o o k   f u n c t i o n 
   *   i n t o   Q U n i t . { h o o k } ,   i n s t e a d   o f   i n v o k i n g   i t   a n d   p a s s i n g   t h e   h o o k   f u n c t i o n . 
   *   Q U n i t . c o n s t r u c t o r   i s   s e t   t o   t h e   e m p t y   F ( )   a b o v e   s o   t h a t   w e   c a n   a d d   t o   i t ' s   p r o t o t y p e   h e r e . 
   *   D o i n g   t h i s   a l l o w s   u s   t o   t e l l   i f   t h e   f o l l o w i n g   m e t h o d s   h a v e   b e e n   o v e r w r i t t e n   o n   t h e   a c t u a l 
   *   Q U n i t   o b j e c t . 
   * / 
 e x t e n d (   Q U n i t . c o n s t r u c t o r . p r o t o t y p e ,   { 
 
 	 / /   L o g g i n g   c a l l b a c k s ;   a l l   r e c e i v e   a   s i n g l e   a r g u m e n t   w i t h   t h e   l i s t e d   p r o p e r t i e s 
 	 / /   r u n   t e s t / l o g s . h t m l   f o r   a n y   r e l a t e d   c h a n g e s 
 	 b e g i n :   r e g i s t e r L o g g i n g C a l l b a c k (   " b e g i n "   ) , 
 
 	 / /   d o n e :   {   f a i l e d ,   p a s s e d ,   t o t a l ,   r u n t i m e   } 
 	 d o n e :   r e g i s t e r L o g g i n g C a l l b a c k (   " d o n e "   ) , 
 
 	 / /   l o g :   {   r e s u l t ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   } 
 	 l o g :   r e g i s t e r L o g g i n g C a l l b a c k (   " l o g "   ) , 
 
 	 / /   t e s t S t a r t :   {   n a m e   } 
 	 t e s t S t a r t :   r e g i s t e r L o g g i n g C a l l b a c k (   " t e s t S t a r t "   ) , 
 
 	 / /   t e s t D o n e :   {   n a m e ,   f a i l e d ,   p a s s e d ,   t o t a l ,   r u n t i m e   } 
 	 t e s t D o n e :   r e g i s t e r L o g g i n g C a l l b a c k (   " t e s t D o n e "   ) , 
 
 	 / /   m o d u l e S t a r t :   {   n a m e   } 
 	 m o d u l e S t a r t :   r e g i s t e r L o g g i n g C a l l b a c k (   " m o d u l e S t a r t "   ) , 
 
 	 / /   m o d u l e D o n e :   {   n a m e ,   f a i l e d ,   p a s s e d ,   t o t a l   } 
 	 m o d u l e D o n e :   r e g i s t e r L o g g i n g C a l l b a c k (   " m o d u l e D o n e "   ) 
 } ) ; 
 
 i f   (   ! d e f i n e d . d o c u m e n t   | |   d o c u m e n t . r e a d y S t a t e   = = =   " c o m p l e t e "   )   { 
 	 c o n f i g . a u t o r u n   =   t r u e ; 
 } 
 
 Q U n i t . l o a d   =   f u n c t i o n ( )   { 
 	 r u n L o g g i n g C a l l b a c k s (   " b e g i n " ,   Q U n i t ,   { }   ) ; 
 
 	 / /   I n i t i a l i z e   t h e   c o n f i g ,   s a v i n g   t h e   e x e c u t i o n   q u e u e 
 	 v a r   b a n n e r ,   f i l t e r ,   i ,   j ,   l a b e l ,   l e n ,   m a i n ,   o l ,   t o o l b a r ,   v a l ,   s e l e c t i o n , 
 	 	 u r l C o n f i g C o n t a i n e r ,   m o d u l e F i l t e r ,   u s e r A g e n t , 
 	 	 n u m M o d u l e s   =   0 , 
 	 	 m o d u l e N a m e s   =   [ ] , 
 	 	 m o d u l e F i l t e r H t m l   =   " " , 
 	 	 u r l C o n f i g H t m l   =   " " , 
 	 	 o l d c o n f i g   =   e x t e n d (   { } ,   c o n f i g   ) ; 
 
 	 Q U n i t . i n i t ( ) ; 
 	 e x t e n d ( c o n f i g ,   o l d c o n f i g ) ; 
 
 	 c o n f i g . b l o c k i n g   =   f a l s e ; 
 
 	 l e n   =   c o n f i g . u r l C o n f i g . l e n g t h ; 
 
 	 f o r   (   i   =   0 ;   i   <   l e n ;   i + +   )   { 
 	 	 v a l   =   c o n f i g . u r l C o n f i g [ i ] ; 
 	 	 i f   (   t y p e o f   v a l   = = =   " s t r i n g "   )   { 
 	 	 	 v a l   =   { 
 	 	 	 	 i d :   v a l , 
 	 	 	 	 l a b e l :   v a l 
 	 	 	 } ; 
 	 	 } 
 	 	 c o n f i g [   v a l . i d   ]   =   Q U n i t . u r l P a r a m s [   v a l . i d   ] ; 
 	 	 i f   (   ! v a l . v a l u e   | |   t y p e o f   v a l . v a l u e   = = =   " s t r i n g "   )   { 
 	 	 	 u r l C o n f i g H t m l   + =   " < i n p u t   i d = ' q u n i t - u r l c o n f i g - "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   n a m e = ' "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   t y p e = ' c h e c k b o x ' "   + 
 	 	 	 	 (   v a l . v a l u e   ?   "   v a l u e = ' "   +   e s c a p e T e x t (   v a l . v a l u e   )   +   " ' "   :   " "   )   + 
 	 	 	 	 (   c o n f i g [   v a l . i d   ]   ?   "   c h e c k e d = ' c h e c k e d ' "   :   " "   )   + 
 	 	 	 	 "   t i t l e = ' "   +   e s c a p e T e x t (   v a l . t o o l t i p   )   + 
 	 	 	 	 " ' > < l a b e l   f o r = ' q u n i t - u r l c o n f i g - "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   t i t l e = ' "   +   e s c a p e T e x t (   v a l . t o o l t i p   )   +   " ' > "   +   v a l . l a b e l   +   " < / l a b e l > " ; 
 	 	 }   e l s e   { 
 	 	 	 u r l C o n f i g H t m l   + =   " < l a b e l   f o r = ' q u n i t - u r l c o n f i g - "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   t i t l e = ' "   +   e s c a p e T e x t (   v a l . t o o l t i p   )   + 
 	 	 	 	 " ' > "   +   v a l . l a b e l   + 
 	 	 	 	 " :   < / l a b e l > < s e l e c t   i d = ' q u n i t - u r l c o n f i g - "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   n a m e = ' "   +   e s c a p e T e x t (   v a l . i d   )   + 
 	 	 	 	 " '   t i t l e = ' "   +   e s c a p e T e x t (   v a l . t o o l t i p   )   + 
 	 	 	 	 " ' > < o p t i o n > < / o p t i o n > " ; 
 	 	 	 s e l e c t i o n   =   f a l s e ; 
 	 	 	 i f   (   Q U n i t . i s (   " a r r a y " ,   v a l . v a l u e   )   )   { 
 	 	 	 	 f o r   (   j   =   0 ;   j   <   v a l . v a l u e . l e n g t h ;   j + +   )   { 
 	 	 	 	 	 u r l C o n f i g H t m l   + =   " < o p t i o n   v a l u e = ' "   +   e s c a p e T e x t (   v a l . v a l u e [ j ]   )   +   " ' "   + 
 	 	 	 	 	 	 (   c o n f i g [   v a l . i d   ]   = = =   v a l . v a l u e [ j ]   ? 
 	 	 	 	 	 	 	 ( s e l e c t i o n   =   t r u e )   & &   "   s e l e c t e d = ' s e l e c t e d ' "   : 
 	 	 	 	 	 	 	 " "   )   + 
 	 	 	 	 	 	 " > "   +   e s c a p e T e x t (   v a l . v a l u e [ j ]   )   +   " < / o p t i o n > " ; 
 	 	 	 	 } 
 	 	 	 }   e l s e   { 
 	 	 	 	 f o r   (   j   i n   v a l . v a l u e   )   { 
 	 	 	 	 	 i f   (   h a s O w n . c a l l (   v a l . v a l u e ,   j   )   )   { 
 	 	 	 	 	 	 u r l C o n f i g H t m l   + =   " < o p t i o n   v a l u e = ' "   +   e s c a p e T e x t (   j   )   +   " ' "   + 
 	 	 	 	 	 	 	 (   c o n f i g [   v a l . i d   ]   = = =   j   ? 
 	 	 	 	 	 	 	 	 ( s e l e c t i o n   =   t r u e )   & &   "   s e l e c t e d = ' s e l e c t e d ' "   : 
 	 	 	 	 	 	 	 	 " "   )   + 
 	 	 	 	 	 	 	 " > "   +   e s c a p e T e x t (   v a l . v a l u e [ j ]   )   +   " < / o p t i o n > " ; 
 	 	 	 	 	 } 
 	 	 	 	 } 
 	 	 	 } 
 	 	 	 i f   (   c o n f i g [   v a l . i d   ]   & &   ! s e l e c t i o n   )   { 
 	 	 	 	 u r l C o n f i g H t m l   + =   " < o p t i o n   v a l u e = ' "   +   e s c a p e T e x t (   c o n f i g [   v a l . i d   ]   )   + 
 	 	 	 	 	 " '   s e l e c t e d = ' s e l e c t e d '   d i s a b l e d = ' d i s a b l e d ' > "   + 
 	 	 	 	 	 e s c a p e T e x t (   c o n f i g [   v a l . i d   ]   )   + 
 	 	 	 	 	 " < / o p t i o n > " ; 
 	 	 	 } 
 	 	 	 u r l C o n f i g H t m l   + =   " < / s e l e c t > " ; 
 	 	 } 
 	 } 
 	 f o r   (   i   i n   c o n f i g . m o d u l e s   )   { 
 	 	 i f   (   c o n f i g . m o d u l e s . h a s O w n P r o p e r t y (   i   )   )   { 
 	 	 	 m o d u l e N a m e s . p u s h ( i ) ; 
 	 	 } 
 	 } 
 	 n u m M o d u l e s   =   m o d u l e N a m e s . l e n g t h ; 
 	 m o d u l e N a m e s . s o r t (   f u n c t i o n (   a ,   b   )   { 
 	 	 r e t u r n   a . l o c a l e C o m p a r e (   b   ) ; 
 	 } ) ; 
 	 m o d u l e F i l t e r H t m l   + =   " < l a b e l   f o r = ' q u n i t - m o d u l e f i l t e r ' > M o d u l e :   < / l a b e l > < s e l e c t   i d = ' q u n i t - m o d u l e f i l t e r '   n a m e = ' m o d u l e f i l t e r ' > < o p t i o n   v a l u e = ' '   "   + 
 	 	 (   c o n f i g . m o d u l e   = = =   u n d e f i n e d     ?   " s e l e c t e d = ' s e l e c t e d ' "   :   " "   )   + 
 	 	 " > <   A l l   M o d u l e s   > < / o p t i o n > " ; 
 
 
 	 f o r   (   i   =   0 ;   i   <   n u m M o d u l e s ;   i + + )   { 
 	 	 	 m o d u l e F i l t e r H t m l   + =   " < o p t i o n   v a l u e = ' "   +   e s c a p e T e x t (   e n c o d e U R I C o m p o n e n t ( m o d u l e N a m e s [ i ] )   )   +   " '   "   + 
 	 	 	 	 (   c o n f i g . m o d u l e   = = =   m o d u l e N a m e s [ i ]   ?   " s e l e c t e d = ' s e l e c t e d ' "   :   " "   )   + 
 	 	 	 	 " > "   +   e s c a p e T e x t ( m o d u l e N a m e s [ i ] )   +   " < / o p t i o n > " ; 
 	 } 
 	 m o d u l e F i l t e r H t m l   + =   " < / s e l e c t > " ; 
 
 	 / /   ` u s e r A g e n t `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 u s e r A g e n t   =   i d (   " q u n i t - u s e r A g e n t "   ) ; 
 	 i f   (   u s e r A g e n t   )   { 
 	 	 u s e r A g e n t . i n n e r H T M L   =   n a v i g a t o r . u s e r A g e n t ; 
 	 } 
 
 	 / /   ` b a n n e r `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 b a n n e r   =   i d (   " q u n i t - h e a d e r "   ) ; 
 	 i f   (   b a n n e r   )   { 
 	 	 b a n n e r . i n n e r H T M L   =   " < a   h r e f = ' "   +   Q U n i t . u r l ( {   f i l t e r :   u n d e f i n e d ,   m o d u l e :   u n d e f i n e d ,   t e s t N u m b e r :   u n d e f i n e d   } )   +   " ' > "   +   b a n n e r . i n n e r H T M L   +   " < / a >   " ; 
 	 } 
 
 	 / /   ` t o o l b a r `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 t o o l b a r   =   i d (   " q u n i t - t e s t r u n n e r - t o o l b a r "   ) ; 
 	 i f   (   t o o l b a r   )   { 
 	 	 / /   ` f i l t e r `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 f i l t e r   =   d o c u m e n t . c r e a t e E l e m e n t (   " i n p u t "   ) ; 
 	 	 f i l t e r . t y p e   =   " c h e c k b o x " ; 
 	 	 f i l t e r . i d   =   " q u n i t - f i l t e r - p a s s " ; 
 
 	 	 a d d E v e n t (   f i l t e r ,   " c l i c k " ,   f u n c t i o n ( )   { 
 	 	 	 v a r   t m p , 
 	 	 	 	 o l   =   i d (   " q u n i t - t e s t s "   ) ; 
 
 	 	 	 i f   (   f i l t e r . c h e c k e d   )   { 
 	 	 	 	 o l . c l a s s N a m e   =   o l . c l a s s N a m e   +   "   h i d e p a s s " ; 
 	 	 	 }   e l s e   { 
 	 	 	 	 t m p   =   "   "   +   o l . c l a s s N a m e . r e p l a c e (   / [ \ n \ t \ r ] / g ,   "   "   )   +   "   " ; 
 	 	 	 	 o l . c l a s s N a m e   =   t m p . r e p l a c e (   /   h i d e p a s s   / ,   "   "   ) ; 
 	 	 	 } 
 	 	 	 i f   (   d e f i n e d . s e s s i o n S t o r a g e   )   { 
 	 	 	 	 i f   ( f i l t e r . c h e c k e d )   { 
 	 	 	 	 	 s e s s i o n S t o r a g e . s e t I t e m (   " q u n i t - f i l t e r - p a s s e d - t e s t s " ,   " t r u e "   ) ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 s e s s i o n S t o r a g e . r e m o v e I t e m (   " q u n i t - f i l t e r - p a s s e d - t e s t s "   ) ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } ) ; 
 
 	 	 i f   (   c o n f i g . h i d e p a s s e d   | |   d e f i n e d . s e s s i o n S t o r a g e   & &   s e s s i o n S t o r a g e . g e t I t e m (   " q u n i t - f i l t e r - p a s s e d - t e s t s "   )   )   { 
 	 	 	 f i l t e r . c h e c k e d   =   t r u e ; 
 	 	 	 / /   ` o l `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 o l   =   i d (   " q u n i t - t e s t s "   ) ; 
 	 	 	 o l . c l a s s N a m e   =   o l . c l a s s N a m e   +   "   h i d e p a s s " ; 
 	 	 } 
 	 	 t o o l b a r . a p p e n d C h i l d (   f i l t e r   ) ; 
 
 	 	 / /   ` l a b e l `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 l a b e l   =   d o c u m e n t . c r e a t e E l e m e n t (   " l a b e l "   ) ; 
 	 	 l a b e l . s e t A t t r i b u t e (   " f o r " ,   " q u n i t - f i l t e r - p a s s "   ) ; 
 	 	 l a b e l . s e t A t t r i b u t e (   " t i t l e " ,   " O n l y   s h o w   t e s t s   a n d   a s s e r t i o n s   t h a t   f a i l .   S t o r e d   i n   s e s s i o n S t o r a g e . "   ) ; 
 	 	 l a b e l . i n n e r H T M L   =   " H i d e   p a s s e d   t e s t s " ; 
 	 	 t o o l b a r . a p p e n d C h i l d (   l a b e l   ) ; 
 
 	 	 u r l C o n f i g C o n t a i n e r   =   d o c u m e n t . c r e a t e E l e m e n t ( " s p a n " ) ; 
 	 	 u r l C o n f i g C o n t a i n e r . i n n e r H T M L   =   u r l C o n f i g H t m l ; 
 	 	 / /   F o r   o l d I E   s u p p o r t : 
 	 	 / /   *   A d d   h a n d l e r s   t o   t h e   i n d i v i d u a l   e l e m e n t s   i n s t e a d   o f   t h e   c o n t a i n e r 
 	 	 / /   *   U s e   " c l i c k "   i n s t e a d   o f   " c h a n g e "   f o r   c h e c k b o x e s 
 	 	 / /   *   F a l l b a c k   f r o m   e v e n t . t a r g e t   t o   e v e n t . s r c E l e m e n t 
 	 	 a d d E v e n t s (   u r l C o n f i g C o n t a i n e r . g e t E l e m e n t s B y T a g N a m e ( " i n p u t " ) ,   " c l i c k " ,   f u n c t i o n (   e v e n t   )   { 
 	 	 	 v a r   p a r a m s   =   { } , 
 	 	 	 	 t a r g e t   =   e v e n t . t a r g e t   | |   e v e n t . s r c E l e m e n t ; 
 	 	 	 p a r a m s [   t a r g e t . n a m e   ]   =   t a r g e t . c h e c k e d   ? 
 	 	 	 	 t a r g e t . d e f a u l t V a l u e   | |   t r u e   : 
 	 	 	 	 u n d e f i n e d ; 
 	 	 	 w i n d o w . l o c a t i o n   =   Q U n i t . u r l (   p a r a m s   ) ; 
 	 	 } ) ; 
 	 	 a d d E v e n t s (   u r l C o n f i g C o n t a i n e r . g e t E l e m e n t s B y T a g N a m e ( " s e l e c t " ) ,   " c h a n g e " ,   f u n c t i o n (   e v e n t   )   { 
 	 	 	 v a r   p a r a m s   =   { } , 
 	 	 	 	 t a r g e t   =   e v e n t . t a r g e t   | |   e v e n t . s r c E l e m e n t ; 
 	 	 	 p a r a m s [   t a r g e t . n a m e   ]   =   t a r g e t . o p t i o n s [   t a r g e t . s e l e c t e d I n d e x   ] . v a l u e   | |   u n d e f i n e d ; 
 	 	 	 w i n d o w . l o c a t i o n   =   Q U n i t . u r l (   p a r a m s   ) ; 
 	 	 } ) ; 
 	 	 t o o l b a r . a p p e n d C h i l d (   u r l C o n f i g C o n t a i n e r   ) ; 
 
 	 	 i f   ( n u m M o d u l e s   >   1 )   { 
 	 	 	 m o d u l e F i l t e r   =   d o c u m e n t . c r e a t e E l e m e n t (   " s p a n "   ) ; 
 	 	 	 m o d u l e F i l t e r . s e t A t t r i b u t e (   " i d " ,   " q u n i t - m o d u l e f i l t e r - c o n t a i n e r "   ) ; 
 	 	 	 m o d u l e F i l t e r . i n n e r H T M L   =   m o d u l e F i l t e r H t m l ; 
 	 	 	 a d d E v e n t (   m o d u l e F i l t e r . l a s t C h i l d ,   " c h a n g e " ,   f u n c t i o n ( )   { 
 	 	 	 	 v a r   s e l e c t B o x   =   m o d u l e F i l t e r . g e t E l e m e n t s B y T a g N a m e ( " s e l e c t " ) [ 0 ] , 
 	 	 	 	 	 s e l e c t e d M o d u l e   =   d e c o d e U R I C o m p o n e n t ( s e l e c t B o x . o p t i o n s [ s e l e c t B o x . s e l e c t e d I n d e x ] . v a l u e ) ; 
 
 	 	 	 	 w i n d o w . l o c a t i o n   =   Q U n i t . u r l ( { 
 	 	 	 	 	 m o d u l e :   (   s e l e c t e d M o d u l e   = = =   " "   )   ?   u n d e f i n e d   :   s e l e c t e d M o d u l e , 
 	 	 	 	 	 / /   R e m o v e   a n y   e x i s t i n g   f i l t e r s 
 	 	 	 	 	 f i l t e r :   u n d e f i n e d , 
 	 	 	 	 	 t e s t N u m b e r :   u n d e f i n e d 
 	 	 	 	 } ) ; 
 	 	 	 } ) ; 
 	 	 	 t o o l b a r . a p p e n d C h i l d ( m o d u l e F i l t e r ) ; 
 	 	 } 
 	 } 
 
 	 / /   ` m a i n `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 m a i n   =   i d (   " q u n i t - f i x t u r e "   ) ; 
 	 i f   (   m a i n   )   { 
 	 	 c o n f i g . f i x t u r e   =   m a i n . i n n e r H T M L ; 
 	 } 
 
 	 i f   (   c o n f i g . a u t o s t a r t   )   { 
 	 	 Q U n i t . s t a r t ( ) ; 
 	 } 
 } ; 
 
 i f   (   d e f i n e d . d o c u m e n t   )   { 
 	 a d d E v e n t (   w i n d o w ,   " l o a d " ,   Q U n i t . l o a d   ) ; 
 } 
 
 / /   ` o n E r r o r F n P r e v `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 / /   P r e s e r v e   o t h e r   h a n d l e r s 
 o n E r r o r F n P r e v   =   w i n d o w . o n e r r o r ; 
 
 / /   C o v e r   u n c a u g h t   e x c e p t i o n s 
 / /   R e t u r n i n g   t r u e   w i l l   s u p p r e s s   t h e   d e f a u l t   b r o w s e r   h a n d l e r , 
 / /   r e t u r n i n g   f a l s e   w i l l   l e t   i t   r u n . 
 w i n d o w . o n e r r o r   =   f u n c t i o n   (   e r r o r ,   f i l e P a t h ,   l i n e r N r   )   { 
 	 v a r   r e t   =   f a l s e ; 
 	 i f   (   o n E r r o r F n P r e v   )   { 
 	 	 r e t   =   o n E r r o r F n P r e v (   e r r o r ,   f i l e P a t h ,   l i n e r N r   ) ; 
 	 } 
 
 	 / /   T r e a t   r e t u r n   v a l u e   a s   w i n d o w . o n e r r o r   i t s e l f   d o e s , 
 	 / /   O n l y   d o   o u r   h a n d l i n g   i f   n o t   s u p p r e s s e d . 
 	 i f   (   r e t   ! = =   t r u e   )   { 
 	 	 i f   (   Q U n i t . c o n f i g . c u r r e n t   )   { 
 	 	 	 i f   (   Q U n i t . c o n f i g . c u r r e n t . i g n o r e G l o b a l E r r o r s   )   { 
 	 	 	 	 r e t u r n   t r u e ; 
 	 	 	 } 
 	 	 	 Q U n i t . p u s h F a i l u r e (   e r r o r ,   f i l e P a t h   +   " : "   +   l i n e r N r   ) ; 
 	 	 }   e l s e   { 
 	 	 	 Q U n i t . t e s t (   " g l o b a l   f a i l u r e " ,   e x t e n d (   f u n c t i o n ( )   { 
 	 	 	 	 Q U n i t . p u s h F a i l u r e (   e r r o r ,   f i l e P a t h   +   " : "   +   l i n e r N r   ) ; 
 	 	 	 } ,   {   v a l i d T e s t :   v a l i d T e s t   }   )   ) ; 
 	 	 } 
 	 	 r e t u r n   f a l s e ; 
 	 } 
 
 	 r e t u r n   r e t ; 
 } ; 
 
 f u n c t i o n   d o n e ( )   { 
 	 c o n f i g . a u t o r u n   =   t r u e ; 
 
 	 / /   L o g   t h e   l a s t   m o d u l e   r e s u l t s 
 	 i f   (   c o n f i g . p r e v i o u s M o d u l e   )   { 
 	 	 r u n L o g g i n g C a l l b a c k s (   " m o d u l e D o n e " ,   Q U n i t ,   { 
 	 	 	 n a m e :   c o n f i g . p r e v i o u s M o d u l e , 
 	 	 	 f a i l e d :   c o n f i g . m o d u l e S t a t s . b a d , 
 	 	 	 p a s s e d :   c o n f i g . m o d u l e S t a t s . a l l   -   c o n f i g . m o d u l e S t a t s . b a d , 
 	 	 	 t o t a l :   c o n f i g . m o d u l e S t a t s . a l l 
 	 	 } ) ; 
 	 } 
 	 d e l e t e   c o n f i g . p r e v i o u s M o d u l e ; 
 
 	 v a r   i ,   k e y , 
 	 	 b a n n e r   =   i d (   " q u n i t - b a n n e r "   ) , 
 	 	 t e s t s   =   i d (   " q u n i t - t e s t s "   ) , 
 	 	 r u n t i m e   =   + n e w   D a t e ( )   -   c o n f i g . s t a r t e d , 
 	 	 p a s s e d   =   c o n f i g . s t a t s . a l l   -   c o n f i g . s t a t s . b a d , 
 	 	 h t m l   =   [ 
 	 	 	 " T e s t s   c o m p l e t e d   i n   " , 
 	 	 	 r u n t i m e , 
 	 	 	 "   m i l l i s e c o n d s . < b r / > " , 
 	 	 	 " < s p a n   c l a s s = ' p a s s e d ' > " , 
 	 	 	 p a s s e d , 
 	 	 	 " < / s p a n >   a s s e r t i o n s   o f   < s p a n   c l a s s = ' t o t a l ' > " , 
 	 	 	 c o n f i g . s t a t s . a l l , 
 	 	 	 " < / s p a n >   p a s s e d ,   < s p a n   c l a s s = ' f a i l e d ' > " , 
 	 	 	 c o n f i g . s t a t s . b a d , 
 	 	 	 " < / s p a n >   f a i l e d . " 
 	 	 ] . j o i n (   " "   ) ; 
 
 	 i f   (   b a n n e r   )   { 
 	 	 b a n n e r . c l a s s N a m e   =   (   c o n f i g . s t a t s . b a d   ?   " q u n i t - f a i l "   :   " q u n i t - p a s s "   ) ; 
 	 } 
 
 	 i f   (   t e s t s   )   { 
 	 	 i d (   " q u n i t - t e s t r e s u l t "   ) . i n n e r H T M L   =   h t m l ; 
 	 } 
 
 	 i f   (   c o n f i g . a l t e r t i t l e   & &   d e f i n e d . d o c u m e n t   & &   d o c u m e n t . t i t l e   )   { 
 	 	 / /   s h o w   '  f o r   g o o d ,   '  f o r   b a d   s u i t e   r e s u l t   i n   t i t l e 
 	 	 / /   u s e   e s c a p e   s e q u e n c e s   i n   c a s e   f i l e   g e t s   l o a d e d   w i t h   n o n - u t f - 8 - c h a r s e t 
 	 	 d o c u m e n t . t i t l e   =   [ 
 	 	 	 (   c o n f i g . s t a t s . b a d   ?   " \ u 2 7 1 6 "   :   " \ u 2 7 1 4 "   ) , 
 	 	 	 d o c u m e n t . t i t l e . r e p l a c e (   / ^ [ \ u 2 7 1 4 \ u 2 7 1 6 ]   / i ,   " "   ) 
 	 	 ] . j o i n (   "   "   ) ; 
 	 } 
 
 	 / /   c l e a r   o w n   s e s s i o n S t o r a g e   i t e m s   i f   a l l   t e s t s   p a s s e d 
 	 i f   (   c o n f i g . r e o r d e r   & &   d e f i n e d . s e s s i o n S t o r a g e   & &   c o n f i g . s t a t s . b a d   = = =   0   )   { 
 	 	 / /   ` k e y `   &   ` i `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 f o r   (   i   =   0 ;   i   <   s e s s i o n S t o r a g e . l e n g t h ;   i + +   )   { 
 	 	 	 k e y   =   s e s s i o n S t o r a g e . k e y (   i + +   ) ; 
 	 	 	 i f   (   k e y . i n d e x O f (   " q u n i t - t e s t - "   )   = = =   0   )   { 
 	 	 	 	 s e s s i o n S t o r a g e . r e m o v e I t e m (   k e y   ) ; 
 	 	 	 } 
 	 	 } 
 	 } 
 
 	 / /   s c r o l l   b a c k   t o   t o p   t o   s h o w   r e s u l t s 
 	 i f   (   c o n f i g . s c r o l l t o p   & &   w i n d o w . s c r o l l T o   )   { 
 	 	 w i n d o w . s c r o l l T o ( 0 ,   0 ) ; 
 	 } 
 
 	 r u n L o g g i n g C a l l b a c k s (   " d o n e " ,   Q U n i t ,   { 
 	 	 f a i l e d :   c o n f i g . s t a t s . b a d , 
 	 	 p a s s e d :   p a s s e d , 
 	 	 t o t a l :   c o n f i g . s t a t s . a l l , 
 	 	 r u n t i m e :   r u n t i m e 
 	 } ) ; 
 } 
 
 / * *   @ r e t u r n   B o o l e a n :   t r u e   i f   t h i s   t e s t   s h o u l d   b e   r a n   * / 
 f u n c t i o n   v a l i d T e s t (   t e s t   )   { 
 	 v a r   i n c l u d e , 
 	 	 f i l t e r   =   c o n f i g . f i l t e r   & &   c o n f i g . f i l t e r . t o L o w e r C a s e ( ) , 
 	 	 m o d u l e   =   c o n f i g . m o d u l e   & &   c o n f i g . m o d u l e . t o L o w e r C a s e ( ) , 
 	 	 f u l l N a m e   =   (   t e s t . m o d u l e   +   " :   "   +   t e s t . t e s t N a m e   ) . t o L o w e r C a s e ( ) ; 
 
 	 / /   I n t e r n a l l y - g e n e r a t e d   t e s t s   a r e   a l w a y s   v a l i d 
 	 i f   (   t e s t . c a l l b a c k   & &   t e s t . c a l l b a c k . v a l i d T e s t   = = =   v a l i d T e s t   )   { 
 	 	 d e l e t e   t e s t . c a l l b a c k . v a l i d T e s t ; 
 	 	 r e t u r n   t r u e ; 
 	 } 
 
 	 i f   (   c o n f i g . t e s t N u m b e r . l e n g t h   >   0   )   { 
 	 	 i f   (   i n A r r a y (   t e s t . t e s t N u m b e r ,   c o n f i g . t e s t N u m b e r   )   <   0   )   { 
 	 	 	 r e t u r n   f a l s e ; 
 	 	 } 
 	 } 
 
 	 i f   (   m o d u l e   & &   (   ! t e s t . m o d u l e   | |   t e s t . m o d u l e . t o L o w e r C a s e ( )   ! = =   m o d u l e   )   )   { 
 	 	 r e t u r n   f a l s e ; 
 	 } 
 
 	 i f   (   ! f i l t e r   )   { 
 	 	 r e t u r n   t r u e ; 
 	 } 
 
 	 i n c l u d e   =   f i l t e r . c h a r A t (   0   )   ! = =   " ! " ; 
 	 i f   (   ! i n c l u d e   )   { 
 	 	 f i l t e r   =   f i l t e r . s l i c e (   1   ) ; 
 	 } 
 
 	 / /   I f   t h e   f i l t e r   m a t c h e s ,   w e   n e e d   t o   h o n o u r   i n c l u d e 
 	 i f   (   f u l l N a m e . i n d e x O f (   f i l t e r   )   ! = =   - 1   )   { 
 	 	 r e t u r n   i n c l u d e ; 
 	 } 
 
 	 / /   O t h e r w i s e ,   d o   t h e   o p p o s i t e 
 	 r e t u r n   ! i n c l u d e ; 
 } 
 
 / /   s o   f a r   s u p p o r t s   o n l y   F i r e f o x ,   C h r o m e   a n d   O p e r a   ( b u g g y ) ,   S a f a r i   ( f o r   r e a l   e x c e p t i o n s ) 
 / /   L a t e r   S a f a r i   a n d   I E 1 0   a r e   s u p p o s e d   t o   s u p p o r t   e r r o r . s t a c k   a s   w e l l 
 / /   S e e   a l s o   h t t p s : / / d e v e l o p e r . m o z i l l a . o r g / e n / J a v a S c r i p t / R e f e r e n c e / G l o b a l _ O b j e c t s / E r r o r / S t a c k 
 f u n c t i o n   e x t r a c t S t a c k t r a c e (   e ,   o f f s e t   )   { 
 	 o f f s e t   =   o f f s e t   = = =   u n d e f i n e d   ?   3   :   o f f s e t ; 
 
 	 v a r   s t a c k ,   i n c l u d e ,   i ; 
 
 	 i f   (   e . s t a c k t r a c e   )   { 
 	 	 / /   O p e r a 
 	 	 r e t u r n   e . s t a c k t r a c e . s p l i t (   " \ n "   ) [   o f f s e t   +   3   ] ; 
 	 }   e l s e   i f   (   e . s t a c k   )   { 
 	 	 / /   F i r e f o x ,   C h r o m e 
 	 	 s t a c k   =   e . s t a c k . s p l i t (   " \ n "   ) ; 
 	 	 i f   ( / ^ e r r o r $ / i . t e s t (   s t a c k [ 0 ]   )   )   { 
 	 	 	 s t a c k . s h i f t ( ) ; 
 	 	 } 
 	 	 i f   (   f i l e N a m e   )   { 
 	 	 	 i n c l u d e   =   [ ] ; 
 	 	 	 f o r   (   i   =   o f f s e t ;   i   <   s t a c k . l e n g t h ;   i + +   )   { 
 	 	 	 	 i f   (   s t a c k [   i   ] . i n d e x O f (   f i l e N a m e   )   ! = =   - 1   )   { 
 	 	 	 	 	 b r e a k ; 
 	 	 	 	 } 
 	 	 	 	 i n c l u d e . p u s h (   s t a c k [   i   ]   ) ; 
 	 	 	 } 
 	 	 	 i f   (   i n c l u d e . l e n g t h   )   { 
 	 	 	 	 r e t u r n   i n c l u d e . j o i n (   " \ n "   ) ; 
 	 	 	 } 
 	 	 } 
 	 	 r e t u r n   s t a c k [   o f f s e t   ] ; 
 	 }   e l s e   i f   (   e . s o u r c e U R L   )   { 
 	 	 / /   S a f a r i ,   P h a n t o m J S 
 	 	 / /   h o p e f u l l y   o n e   d a y   S a f a r i   p r o v i d e s   a c t u a l   s t a c k t r a c e s 
 	 	 / /   e x c l u d e   u s e l e s s   s e l f - r e f e r e n c e   f o r   g e n e r a t e d   E r r o r   o b j e c t s 
 	 	 i f   (   / q u n i t . j s $ / . t e s t (   e . s o u r c e U R L   )   )   { 
 	 	 	 r e t u r n ; 
 	 	 } 
 	 	 / /   f o r   a c t u a l   e x c e p t i o n s ,   t h i s   i s   u s e f u l 
 	 	 r e t u r n   e . s o u r c e U R L   +   " : "   +   e . l i n e ; 
 	 } 
 } 
 f u n c t i o n   s o u r c e F r o m S t a c k t r a c e (   o f f s e t   )   { 
 	 t r y   { 
 	 	 t h r o w   n e w   E r r o r ( ) ; 
 	 }   c a t c h   (   e   )   { 
 	 	 r e t u r n   e x t r a c t S t a c k t r a c e (   e ,   o f f s e t   ) ; 
 	 } 
 } 
 
 / * * 
   *   E s c a p e   t e x t   f o r   a t t r i b u t e   o r   t e x t   c o n t e n t . 
   * / 
 f u n c t i o n   e s c a p e T e x t (   s   )   { 
 	 i f   (   ! s   )   { 
 	 	 r e t u r n   " " ; 
 	 } 
 	 s   =   s   +   " " ; 
 	 / /   B o t h   s i n g l e   q u o t e s   a n d   d o u b l e   q u o t e s   ( f o r   a t t r i b u t e s ) 
 	 r e t u r n   s . r e p l a c e (   / [ ' " < > & ] / g ,   f u n c t i o n (   s   )   { 
 	 	 s w i t c h (   s   )   { 
 	 	 	 c a s e   " ' " : 
 	 	 	 	 r e t u r n   " & # 0 3 9 ; " ; 
 	 	 	 c a s e   " \ " " : 
 	 	 	 	 r e t u r n   " & q u o t ; " ; 
 	 	 	 c a s e   " < " : 
 	 	 	 	 r e t u r n   " & l t ; " ; 
 	 	 	 c a s e   " > " : 
 	 	 	 	 r e t u r n   " & g t ; " ; 
 	 	 	 c a s e   " & " : 
 	 	 	 	 r e t u r n   " & a m p ; " ; 
 	 	 } 
 	 } ) ; 
 } 
 
 f u n c t i o n   s y n c h r o n i z e (   c a l l b a c k ,   l a s t   )   { 
 	 c o n f i g . q u e u e . p u s h (   c a l l b a c k   ) ; 
 
 	 i f   (   c o n f i g . a u t o r u n   & &   ! c o n f i g . b l o c k i n g   )   { 
 	 	 p r o c e s s (   l a s t   ) ; 
 	 } 
 } 
 
 f u n c t i o n   p r o c e s s (   l a s t   )   { 
 	 f u n c t i o n   n e x t ( )   { 
 	 	 p r o c e s s (   l a s t   ) ; 
 	 } 
 	 v a r   s t a r t   =   n e w   D a t e ( ) . g e t T i m e ( ) ; 
 	 c o n f i g . d e p t h   =   c o n f i g . d e p t h   ?   c o n f i g . d e p t h   +   1   :   1 ; 
 
 	 w h i l e   (   c o n f i g . q u e u e . l e n g t h   & &   ! c o n f i g . b l o c k i n g   )   { 
 	 	 i f   (   ! d e f i n e d . s e t T i m e o u t   | |   c o n f i g . u p d a t e R a t e   < =   0   | |   (   (   n e w   D a t e ( ) . g e t T i m e ( )   -   s t a r t   )   <   c o n f i g . u p d a t e R a t e   )   )   { 
 	 	 	 c o n f i g . q u e u e . s h i f t ( ) ( ) ; 
 	 	 }   e l s e   { 
 	 	 	 s e t T i m e o u t (   n e x t ,   1 3   ) ; 
 	 	 	 b r e a k ; 
 	 	 } 
 	 } 
 	 c o n f i g . d e p t h - - ; 
 	 i f   (   l a s t   & &   ! c o n f i g . b l o c k i n g   & &   ! c o n f i g . q u e u e . l e n g t h   & &   c o n f i g . d e p t h   = = =   0   )   { 
 	 	 d o n e ( ) ; 
 	 } 
 } 
 
 f u n c t i o n   s a v e G l o b a l ( )   { 
 	 c o n f i g . p o l l u t i o n   =   [ ] ; 
 
 	 i f   (   c o n f i g . n o g l o b a l s   )   { 
 	 	 f o r   (   v a r   k e y   i n   w i n d o w   )   { 
 	 	 	 i f   (   h a s O w n . c a l l (   w i n d o w ,   k e y   )   )   { 
 	 	 	 	 / /   i n   O p e r a   s o m e t i m e s   D O M   e l e m e n t   i d s   s h o w   u p   h e r e ,   i g n o r e   t h e m 
 	 	 	 	 i f   (   / ^ q u n i t - t e s t - o u t p u t / . t e s t (   k e y   )   )   { 
 	 	 	 	 	 c o n t i n u e ; 
 	 	 	 	 } 
 	 	 	 	 c o n f i g . p o l l u t i o n . p u s h (   k e y   ) ; 
 	 	 	 } 
 	 	 } 
 	 } 
 } 
 
 f u n c t i o n   c h e c k P o l l u t i o n ( )   { 
 	 v a r   n e w G l o b a l s , 
 	 	 d e l e t e d G l o b a l s , 
 	 	 o l d   =   c o n f i g . p o l l u t i o n ; 
 
 	 s a v e G l o b a l ( ) ; 
 
 	 n e w G l o b a l s   =   d i f f (   c o n f i g . p o l l u t i o n ,   o l d   ) ; 
 	 i f   (   n e w G l o b a l s . l e n g t h   >   0   )   { 
 	 	 Q U n i t . p u s h F a i l u r e (   " I n t r o d u c e d   g l o b a l   v a r i a b l e ( s ) :   "   +   n e w G l o b a l s . j o i n ( " ,   " )   ) ; 
 	 } 
 
 	 d e l e t e d G l o b a l s   =   d i f f (   o l d ,   c o n f i g . p o l l u t i o n   ) ; 
 	 i f   (   d e l e t e d G l o b a l s . l e n g t h   >   0   )   { 
 	 	 Q U n i t . p u s h F a i l u r e (   " D e l e t e d   g l o b a l   v a r i a b l e ( s ) :   "   +   d e l e t e d G l o b a l s . j o i n ( " ,   " )   ) ; 
 	 } 
 } 
 
 / /   r e t u r n s   a   n e w   A r r a y   w i t h   t h e   e l e m e n t s   t h a t   a r e   i n   a   b u t   n o t   i n   b 
 f u n c t i o n   d i f f (   a ,   b   )   { 
 	 v a r   i ,   j , 
 	 	 r e s u l t   =   a . s l i c e ( ) ; 
 
 	 f o r   (   i   =   0 ;   i   <   r e s u l t . l e n g t h ;   i + +   )   { 
 	 	 f o r   (   j   =   0 ;   j   <   b . l e n g t h ;   j + +   )   { 
 	 	 	 i f   (   r e s u l t [ i ]   = = =   b [ j ]   )   { 
 	 	 	 	 r e s u l t . s p l i c e (   i ,   1   ) ; 
 	 	 	 	 i - - ; 
 	 	 	 	 b r e a k ; 
 	 	 	 } 
 	 	 } 
 	 } 
 	 r e t u r n   r e s u l t ; 
 } 
 
 f u n c t i o n   e x t e n d (   a ,   b   )   { 
 	 f o r   (   v a r   p r o p   i n   b   )   { 
 	 	 i f   (   h a s O w n . c a l l (   b ,   p r o p   )   )   { 
 	 	 	 / /   A v o i d   " M e m b e r   n o t   f o u n d "   e r r o r   i n   I E 8   c a u s e d   b y   m e s s i n g   w i t h   w i n d o w . c o n s t r u c t o r 
 	 	 	 i f   (   ! (   p r o p   = = =   " c o n s t r u c t o r "   & &   a   = = =   w i n d o w   )   )   { 
 	 	 	 	 i f   (   b [   p r o p   ]   = = =   u n d e f i n e d   )   { 
 	 	 	 	 	 d e l e t e   a [   p r o p   ] ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 a [   p r o p   ]   =   b [   p r o p   ] ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } 
 	 } 
 
 	 r e t u r n   a ; 
 } 
 
 / * * 
   *   @ p a r a m   { H T M L E l e m e n t }   e l e m 
   *   @ p a r a m   { s t r i n g }   t y p e 
   *   @ p a r a m   { F u n c t i o n }   f n 
   * / 
 f u n c t i o n   a d d E v e n t (   e l e m ,   t y p e ,   f n   )   { 
 	 i f   (   e l e m . a d d E v e n t L i s t e n e r   )   { 
 
 	 	 / /   S t a n d a r d s - b a s e d   b r o w s e r s 
 	 	 e l e m . a d d E v e n t L i s t e n e r (   t y p e ,   f n ,   f a l s e   ) ; 
 	 }   e l s e   i f   (   e l e m . a t t a c h E v e n t   )   { 
 
 	 	 / /   s u p p o r t :   I E   < 9 
 	 	 e l e m . a t t a c h E v e n t (   " o n "   +   t y p e ,   f n   ) ; 
 	 }   e l s e   { 
 
 	 	 / /   C a l l e r   m u s t   e n s u r e   s u p p o r t   f o r   e v e n t   l i s t e n e r s   i s   p r e s e n t 
 	 	 t h r o w   n e w   E r r o r (   " a d d E v e n t ( )   w a s   c a l l e d   i n   a   c o n t e x t   w i t h o u t   e v e n t   l i s t e n e r   s u p p o r t "   ) ; 
 	 } 
 } 
 
 / * * 
   *   @ p a r a m   { A r r a y | N o d e L i s t }   e l e m s 
   *   @ p a r a m   { s t r i n g }   t y p e 
   *   @ p a r a m   { F u n c t i o n }   f n 
   * / 
 f u n c t i o n   a d d E v e n t s (   e l e m s ,   t y p e ,   f n   )   { 
 	 v a r   i   =   e l e m s . l e n g t h ; 
 	 w h i l e   (   i - -   )   { 
 	 	 a d d E v e n t (   e l e m s [ i ] ,   t y p e ,   f n   ) ; 
 	 } 
 } 
 
 f u n c t i o n   h a s C l a s s (   e l e m ,   n a m e   )   { 
 	 r e t u r n   ( "   "   +   e l e m . c l a s s N a m e   +   "   " ) . i n d e x O f ( "   "   +   n a m e   +   "   " )   >   - 1 ; 
 } 
 
 f u n c t i o n   a d d C l a s s (   e l e m ,   n a m e   )   { 
 	 i f   (   ! h a s C l a s s (   e l e m ,   n a m e   )   )   { 
 	 	 e l e m . c l a s s N a m e   + =   ( e l e m . c l a s s N a m e   ?   "   "   :   " " )   +   n a m e ; 
 	 } 
 } 
 
 f u n c t i o n   r e m o v e C l a s s (   e l e m ,   n a m e   )   { 
 	 v a r   s e t   =   "   "   +   e l e m . c l a s s N a m e   +   "   " ; 
 	 / /   C l a s s   n a m e   m a y   a p p e a r   m u l t i p l e   t i m e s 
 	 w h i l e   (   s e t . i n d e x O f ( "   "   +   n a m e   +   "   " )   >   - 1   )   { 
 	 	 s e t   =   s e t . r e p l a c e ( "   "   +   n a m e   +   "   "   ,   "   " ) ; 
 	 } 
 	 / /   I f   p o s s i b l e ,   t r i m   i t   f o r   p r e t t i n e s s ,   b u t   n o t   n e c e s s a r i l y 
 	 e l e m . c l a s s N a m e   =   t y p e o f   s e t . t r i m   = = =   " f u n c t i o n "   ?   s e t . t r i m ( )   :   s e t . r e p l a c e ( / ^ \ s + | \ s + $ / g ,   " " ) ; 
 } 
 
 f u n c t i o n   i d (   n a m e   )   { 
 	 r e t u r n   d e f i n e d . d o c u m e n t   & &   d o c u m e n t . g e t E l e m e n t B y I d   & &   d o c u m e n t . g e t E l e m e n t B y I d (   n a m e   ) ; 
 } 
 
 f u n c t i o n   r e g i s t e r L o g g i n g C a l l b a c k (   k e y   )   { 
 	 r e t u r n   f u n c t i o n (   c a l l b a c k   )   { 
 	 	 c o n f i g [ k e y ] . p u s h (   c a l l b a c k   ) ; 
 	 } ; 
 } 
 
 / /   S u p p o r t s   d e p r e c a t e d   m e t h o d   o f   c o m p l e t e l y   o v e r w r i t i n g   l o g g i n g   c a l l b a c k s 
 f u n c t i o n   r u n L o g g i n g C a l l b a c k s (   k e y ,   s c o p e ,   a r g s   )   { 
 	 v a r   i ,   c a l l b a c k s ; 
 	 i f   (   Q U n i t . h a s O w n P r o p e r t y (   k e y   )   )   { 
 	 	 Q U n i t [   k e y   ] . c a l l ( s c o p e ,   a r g s   ) ; 
 	 }   e l s e   { 
 	 	 c a l l b a c k s   =   c o n f i g [   k e y   ] ; 
 	 	 f o r   (   i   =   0 ;   i   <   c a l l b a c k s . l e n g t h ;   i + +   )   { 
 	 	 	 c a l l b a c k s [   i   ] . c a l l (   s c o p e ,   a r g s   ) ; 
 	 	 } 
 	 } 
 } 
 
 / /   f r o m   j q u e r y . j s 
 f u n c t i o n   i n A r r a y (   e l e m ,   a r r a y   )   { 
 	 i f   (   a r r a y . i n d e x O f   )   { 
 	 	 r e t u r n   a r r a y . i n d e x O f (   e l e m   ) ; 
 	 } 
 
 	 f o r   (   v a r   i   =   0 ,   l e n g t h   =   a r r a y . l e n g t h ;   i   <   l e n g t h ;   i + +   )   { 
 	 	 i f   (   a r r a y [   i   ]   = = =   e l e m   )   { 
 	 	 	 r e t u r n   i ; 
 	 	 } 
 	 } 
 
 	 r e t u r n   - 1 ; 
 } 
 
 f u n c t i o n   T e s t (   s e t t i n g s   )   { 
 	 e x t e n d (   t h i s ,   s e t t i n g s   ) ; 
 	 t h i s . a s s e r t i o n s   =   [ ] ; 
 	 t h i s . t e s t N u m b e r   =   + + T e s t . c o u n t ; 
 } 
 
 T e s t . c o u n t   =   0 ; 
 
 T e s t . p r o t o t y p e   =   { 
 	 i n i t :   f u n c t i o n ( )   { 
 	 	 v a r   a ,   b ,   l i , 
 	 	 	 t e s t s   =   i d (   " q u n i t - t e s t s "   ) ; 
 
 	 	 i f   (   t e s t s   )   { 
 	 	 	 b   =   d o c u m e n t . c r e a t e E l e m e n t (   " s t r o n g "   ) ; 
 	 	 	 b . i n n e r H T M L   =   t h i s . n a m e H t m l ; 
 
 	 	 	 / /   ` a `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 a   =   d o c u m e n t . c r e a t e E l e m e n t (   " a "   ) ; 
 	 	 	 a . i n n e r H T M L   =   " R e r u n " ; 
 	 	 	 a . h r e f   =   Q U n i t . u r l ( {   t e s t N u m b e r :   t h i s . t e s t N u m b e r   } ) ; 
 
 	 	 	 l i   =   d o c u m e n t . c r e a t e E l e m e n t (   " l i "   ) ; 
 	 	 	 l i . a p p e n d C h i l d (   b   ) ; 
 	 	 	 l i . a p p e n d C h i l d (   a   ) ; 
 	 	 	 l i . c l a s s N a m e   =   " r u n n i n g " ; 
 	 	 	 l i . i d   =   t h i s . i d   =   " q u n i t - t e s t - o u t p u t "   +   t e s t I d + + ; 
 
 	 	 	 t e s t s . a p p e n d C h i l d (   l i   ) ; 
 	 	 } 
 	 } , 
 	 s e t u p :   f u n c t i o n ( )   { 
 	 	 i f   ( 
 	 	 	 / /   E m i t   m o d u l e S t a r t   w h e n   w e ' r e   s w i t c h i n g   f r o m   o n e   m o d u l e   t o   a n o t h e r 
 	 	 	 t h i s . m o d u l e   ! = =   c o n f i g . p r e v i o u s M o d u l e   | | 
 	 	 	 	 / /   T h e y   c o u l d   b e   e q u a l   ( b o t h   u n d e f i n e d )   b u t   i f   t h e   p r e v i o u s M o d u l e   p r o p e r t y   d o e s n ' t 
 	 	 	 	 / /   y e t   e x i s t   i t   m e a n s   t h i s   i s   t h e   f i r s t   t e s t   i n   a   s u i t e   t h a t   i s n ' t   w r a p p e d   i n   a 
 	 	 	 	 / /   m o d u l e ,   i n   w h i c h   c a s e   w e ' l l   j u s t   e m i t   a   m o d u l e S t a r t   e v e n t   f o r   ' u n d e f i n e d ' . 
 	 	 	 	 / /   W i t h o u t   t h i s ,   r e p o r t e r s   c a n   g e t   t e s t S t a r t   b e f o r e   m o d u l e S t a r t     w h i c h   i s   a   p r o b l e m . 
 	 	 	 	 ! h a s O w n . c a l l (   c o n f i g ,   " p r e v i o u s M o d u l e "   ) 
 	 	 )   { 
 	 	 	 i f   (   h a s O w n . c a l l (   c o n f i g ,   " p r e v i o u s M o d u l e "   )   )   { 
 	 	 	 	 r u n L o g g i n g C a l l b a c k s (   " m o d u l e D o n e " ,   Q U n i t ,   { 
 	 	 	 	 	 n a m e :   c o n f i g . p r e v i o u s M o d u l e , 
 	 	 	 	 	 f a i l e d :   c o n f i g . m o d u l e S t a t s . b a d , 
 	 	 	 	 	 p a s s e d :   c o n f i g . m o d u l e S t a t s . a l l   -   c o n f i g . m o d u l e S t a t s . b a d , 
 	 	 	 	 	 t o t a l :   c o n f i g . m o d u l e S t a t s . a l l 
 	 	 	 	 } ) ; 
 	 	 	 } 
 	 	 	 c o n f i g . p r e v i o u s M o d u l e   =   t h i s . m o d u l e ; 
 	 	 	 c o n f i g . m o d u l e S t a t s   =   {   a l l :   0 ,   b a d :   0   } ; 
 	 	 	 r u n L o g g i n g C a l l b a c k s (   " m o d u l e S t a r t " ,   Q U n i t ,   { 
 	 	 	 	 n a m e :   t h i s . m o d u l e 
 	 	 	 } ) ; 
 	 	 } 
 
 	 	 c o n f i g . c u r r e n t   =   t h i s ; 
 
 	 	 t h i s . t e s t E n v i r o n m e n t   =   e x t e n d ( { 
 	 	 	 s e t u p :   f u n c t i o n ( )   { } , 
 	 	 	 t e a r d o w n :   f u n c t i o n ( )   { } 
 	 	 } ,   t h i s . m o d u l e T e s t E n v i r o n m e n t   ) ; 
 
 	 	 t h i s . s t a r t e d   =   + n e w   D a t e ( ) ; 
 	 	 r u n L o g g i n g C a l l b a c k s (   " t e s t S t a r t " ,   Q U n i t ,   { 
 	 	 	 n a m e :   t h i s . t e s t N a m e , 
 	 	 	 m o d u l e :   t h i s . m o d u l e 
 	 	 } ) ; 
 
 	 	 / * j s h i n t   c a m e l c a s e : f a l s e   * / 
 
 
 	 	 / * * 
 	 	   *   E x p o s e   t h e   c u r r e n t   t e s t   e n v i r o n m e n t . 
 	 	   * 
 	 	   *   @ d e p r e c a t e d   s i n c e   1 . 1 2 . 0 :   U s e   Q U n i t . c o n f i g . c u r r e n t . t e s t E n v i r o n m e n t   i n s t e a d . 
 	 	   * / 
 	 	 Q U n i t . c u r r e n t _ t e s t E n v i r o n m e n t   =   t h i s . t e s t E n v i r o n m e n t ; 
 
 	 	 / * j s h i n t   c a m e l c a s e : t r u e   * / 
 
 	 	 i f   (   ! c o n f i g . p o l l u t i o n   )   { 
 	 	 	 s a v e G l o b a l ( ) ; 
 	 	 } 
 	 	 i f   (   c o n f i g . n o t r y c a t c h   )   { 
 	 	 	 t h i s . t e s t E n v i r o n m e n t . s e t u p . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 	 r e t u r n ; 
 	 	 } 
 	 	 t r y   { 
 	 	 	 t h i s . t e s t E n v i r o n m e n t . s e t u p . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 }   c a t c h (   e   )   { 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " S e t u p   f a i l e d   o n   "   +   t h i s . t e s t N a m e   +   " :   "   +   (   e . m e s s a g e   | |   e   ) ,   e x t r a c t S t a c k t r a c e (   e ,   1   )   ) ; 
 	 	 } 
 	 } , 
 	 r u n :   f u n c t i o n ( )   { 
 	 	 c o n f i g . c u r r e n t   =   t h i s ; 
 
 	 	 v a r   r u n n i n g   =   i d (   " q u n i t - t e s t r e s u l t "   ) ; 
 
 	 	 i f   (   r u n n i n g   )   { 
 	 	 	 r u n n i n g . i n n e r H T M L   =   " R u n n i n g :   < b r / > "   +   t h i s . n a m e H t m l ; 
 	 	 } 
 
 	 	 i f   (   t h i s . a s y n c   )   { 
 	 	 	 Q U n i t . s t o p ( ) ; 
 	 	 } 
 
 	 	 t h i s . c a l l b a c k S t a r t e d   =   + n e w   D a t e ( ) ; 
 
 	 	 i f   (   c o n f i g . n o t r y c a t c h   )   { 
 	 	 	 t h i s . c a l l b a c k . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 	 t h i s . c a l l b a c k R u n t i m e   =   + n e w   D a t e ( )   -   t h i s . c a l l b a c k S t a r t e d ; 
 	 	 	 r e t u r n ; 
 	 	 } 
 
 	 	 t r y   { 
 	 	 	 t h i s . c a l l b a c k . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 	 t h i s . c a l l b a c k R u n t i m e   =   + n e w   D a t e ( )   -   t h i s . c a l l b a c k S t a r t e d ; 
 	 	 }   c a t c h (   e   )   { 
 	 	 	 t h i s . c a l l b a c k R u n t i m e   =   + n e w   D a t e ( )   -   t h i s . c a l l b a c k S t a r t e d ; 
 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " D i e d   o n   t e s t   # "   +   ( t h i s . a s s e r t i o n s . l e n g t h   +   1 )   +   "   "   +   t h i s . s t a c k   +   " :   "   +   (   e . m e s s a g e   | |   e   ) ,   e x t r a c t S t a c k t r a c e (   e ,   0   )   ) ; 
 	 	 	 / /   e l s e   n e x t   t e s t   w i l l   c a r r y   t h e   r e s p o n s i b i l i t y 
 	 	 	 s a v e G l o b a l ( ) ; 
 
 	 	 	 / /   R e s t a r t   t h e   t e s t s   i f   t h e y ' r e   b l o c k i n g 
 	 	 	 i f   (   c o n f i g . b l o c k i n g   )   { 
 	 	 	 	 Q U n i t . s t a r t ( ) ; 
 	 	 	 } 
 	 	 } 
 	 } , 
 	 t e a r d o w n :   f u n c t i o n ( )   { 
 	 	 c o n f i g . c u r r e n t   =   t h i s ; 
 	 	 i f   (   c o n f i g . n o t r y c a t c h   )   { 
 	 	 	 i f   (   t y p e o f   t h i s . c a l l b a c k R u n t i m e   = = =   " u n d e f i n e d "   )   { 
 	 	 	 	 t h i s . c a l l b a c k R u n t i m e   =   + n e w   D a t e ( )   -   t h i s . c a l l b a c k S t a r t e d ; 
 	 	 	 } 
 	 	 	 t h i s . t e s t E n v i r o n m e n t . t e a r d o w n . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 	 r e t u r n ; 
 	 	 }   e l s e   { 
 	 	 	 t r y   { 
 	 	 	 	 t h i s . t e s t E n v i r o n m e n t . t e a r d o w n . c a l l (   t h i s . t e s t E n v i r o n m e n t ,   Q U n i t . a s s e r t   ) ; 
 	 	 	 }   c a t c h (   e   )   { 
 	 	 	 	 Q U n i t . p u s h F a i l u r e (   " T e a r d o w n   f a i l e d   o n   "   +   t h i s . t e s t N a m e   +   " :   "   +   (   e . m e s s a g e   | |   e   ) ,   e x t r a c t S t a c k t r a c e (   e ,   1   )   ) ; 
 	 	 	 } 
 	 	 } 
 	 	 c h e c k P o l l u t i o n ( ) ; 
 	 } , 
 	 f i n i s h :   f u n c t i o n ( )   { 
 	 	 c o n f i g . c u r r e n t   =   t h i s ; 
 	 	 i f   (   c o n f i g . r e q u i r e E x p e c t s   & &   t h i s . e x p e c t e d   = = =   n u l l   )   { 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " E x p e c t e d   n u m b e r   o f   a s s e r t i o n s   t o   b e   d e f i n e d ,   b u t   e x p e c t ( )   w a s   n o t   c a l l e d . " ,   t h i s . s t a c k   ) ; 
 	 	 }   e l s e   i f   (   t h i s . e x p e c t e d   ! = =   n u l l   & &   t h i s . e x p e c t e d   ! = =   t h i s . a s s e r t i o n s . l e n g t h   )   { 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " E x p e c t e d   "   +   t h i s . e x p e c t e d   +   "   a s s e r t i o n s ,   b u t   "   +   t h i s . a s s e r t i o n s . l e n g t h   +   "   w e r e   r u n " ,   t h i s . s t a c k   ) ; 
 	 	 }   e l s e   i f   (   t h i s . e x p e c t e d   = = =   n u l l   & &   ! t h i s . a s s e r t i o n s . l e n g t h   )   { 
 	 	 	 Q U n i t . p u s h F a i l u r e (   " E x p e c t e d   a t   l e a s t   o n e   a s s e r t i o n ,   b u t   n o n e   w e r e   r u n   -   c a l l   e x p e c t ( 0 )   t o   a c c e p t   z e r o   a s s e r t i o n s . " ,   t h i s . s t a c k   ) ; 
 	 	 } 
 
 	 	 v a r   i ,   a s s e r t i o n ,   a ,   b ,   t i m e ,   l i ,   o l , 
 	 	 	 t e s t   =   t h i s , 
 	 	 	 g o o d   =   0 , 
 	 	 	 b a d   =   0 , 
 	 	 	 t e s t s   =   i d (   " q u n i t - t e s t s "   ) ; 
 
 	 	 t h i s . r u n t i m e   =   + n e w   D a t e ( )   -   t h i s . s t a r t e d ; 
 	 	 c o n f i g . s t a t s . a l l   + =   t h i s . a s s e r t i o n s . l e n g t h ; 
 	 	 c o n f i g . m o d u l e S t a t s . a l l   + =   t h i s . a s s e r t i o n s . l e n g t h ; 
 
 	 	 i f   (   t e s t s   )   { 
 	 	 	 o l   =   d o c u m e n t . c r e a t e E l e m e n t (   " o l "   ) ; 
 	 	 	 o l . c l a s s N a m e   =   " q u n i t - a s s e r t - l i s t " ; 
 
 	 	 	 f o r   (   i   =   0 ;   i   <   t h i s . a s s e r t i o n s . l e n g t h ;   i + +   )   { 
 	 	 	 	 a s s e r t i o n   =   t h i s . a s s e r t i o n s [ i ] ; 
 
 	 	 	 	 l i   =   d o c u m e n t . c r e a t e E l e m e n t (   " l i "   ) ; 
 	 	 	 	 l i . c l a s s N a m e   =   a s s e r t i o n . r e s u l t   ?   " p a s s "   :   " f a i l " ; 
 	 	 	 	 l i . i n n e r H T M L   =   a s s e r t i o n . m e s s a g e   | |   (   a s s e r t i o n . r e s u l t   ?   " o k a y "   :   " f a i l e d "   ) ; 
 	 	 	 	 o l . a p p e n d C h i l d (   l i   ) ; 
 
 	 	 	 	 i f   (   a s s e r t i o n . r e s u l t   )   { 
 	 	 	 	 	 g o o d + + ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 b a d + + ; 
 	 	 	 	 	 c o n f i g . s t a t s . b a d + + ; 
 	 	 	 	 	 c o n f i g . m o d u l e S t a t s . b a d + + ; 
 	 	 	 	 } 
 	 	 	 } 
 
 	 	 	 / /   s t o r e   r e s u l t   w h e n   p o s s i b l e 
 	 	 	 i f   (   Q U n i t . c o n f i g . r e o r d e r   & &   d e f i n e d . s e s s i o n S t o r a g e   )   { 
 	 	 	 	 i f   (   b a d   )   { 
 	 	 	 	 	 s e s s i o n S t o r a g e . s e t I t e m (   " q u n i t - t e s t - "   +   t h i s . m o d u l e   +   " - "   +   t h i s . t e s t N a m e ,   b a d   ) ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 s e s s i o n S t o r a g e . r e m o v e I t e m (   " q u n i t - t e s t - "   +   t h i s . m o d u l e   +   " - "   +   t h i s . t e s t N a m e   ) ; 
 	 	 	 	 } 
 	 	 	 } 
 
 	 	 	 i f   (   b a d   = = =   0   )   { 
 	 	 	 	 a d d C l a s s (   o l ,   " q u n i t - c o l l a p s e d "   ) ; 
 	 	 	 } 
 
 	 	 	 / /   ` b `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 b   =   d o c u m e n t . c r e a t e E l e m e n t (   " s t r o n g "   ) ; 
 	 	 	 b . i n n e r H T M L   =   t h i s . n a m e H t m l   +   "   < b   c l a s s = ' c o u n t s ' > ( < b   c l a s s = ' f a i l e d ' > "   +   b a d   +   " < / b > ,   < b   c l a s s = ' p a s s e d ' > "   +   g o o d   +   " < / b > ,   "   +   t h i s . a s s e r t i o n s . l e n g t h   +   " ) < / b > " ; 
 
 	 	 	 a d d E v e n t ( b ,   " c l i c k " ,   f u n c t i o n ( )   { 
 	 	 	 	 v a r   n e x t   =   b . p a r e n t N o d e . l a s t C h i l d , 
 	 	 	 	 	 c o l l a p s e d   =   h a s C l a s s (   n e x t ,   " q u n i t - c o l l a p s e d "   ) ; 
 	 	 	 	 (   c o l l a p s e d   ?   r e m o v e C l a s s   :   a d d C l a s s   ) (   n e x t ,   " q u n i t - c o l l a p s e d "   ) ; 
 	 	 	 } ) ; 
 
 	 	 	 a d d E v e n t ( b ,   " d b l c l i c k " ,   f u n c t i o n (   e   )   { 
 	 	 	 	 v a r   t a r g e t   =   e   & &   e . t a r g e t   ?   e . t a r g e t   :   w i n d o w . e v e n t . s r c E l e m e n t ; 
 	 	 	 	 i f   (   t a r g e t . n o d e N a m e . t o L o w e r C a s e ( )   = = =   " s p a n "   | |   t a r g e t . n o d e N a m e . t o L o w e r C a s e ( )   = = =   " b "   )   { 
 	 	 	 	 	 t a r g e t   =   t a r g e t . p a r e n t N o d e ; 
 	 	 	 	 } 
 	 	 	 	 i f   (   w i n d o w . l o c a t i o n   & &   t a r g e t . n o d e N a m e . t o L o w e r C a s e ( )   = = =   " s t r o n g "   )   { 
 	 	 	 	 	 w i n d o w . l o c a t i o n   =   Q U n i t . u r l ( {   t e s t N u m b e r :   t e s t . t e s t N u m b e r   } ) ; 
 	 	 	 	 } 
 	 	 	 } ) ; 
 
 	 	 	 / /   ` t i m e `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 t i m e   =   d o c u m e n t . c r e a t e E l e m e n t (   " s p a n "   ) ; 
 	 	 	 t i m e . c l a s s N a m e   =   " r u n t i m e " ; 
 	 	 	 t i m e . i n n e r H T M L   =   t h i s . r u n t i m e   +   "   m s " ; 
 
 	 	 	 / /   ` l i `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 l i   =   i d (   t h i s . i d   ) ; 
 	 	 	 l i . c l a s s N a m e   =   b a d   ?   " f a i l "   :   " p a s s " ; 
 	 	 	 l i . r e m o v e C h i l d (   l i . f i r s t C h i l d   ) ; 
 	 	 	 a   =   l i . f i r s t C h i l d ; 
 	 	 	 l i . a p p e n d C h i l d (   b   ) ; 
 	 	 	 l i . a p p e n d C h i l d (   a   ) ; 
 	 	 	 l i . a p p e n d C h i l d (   t i m e   ) ; 
 	 	 	 l i . a p p e n d C h i l d (   o l   ) ; 
 
 	 	 }   e l s e   { 
 	 	 	 f o r   (   i   =   0 ;   i   <   t h i s . a s s e r t i o n s . l e n g t h ;   i + +   )   { 
 	 	 	 	 i f   (   ! t h i s . a s s e r t i o n s [ i ] . r e s u l t   )   { 
 	 	 	 	 	 b a d + + ; 
 	 	 	 	 	 c o n f i g . s t a t s . b a d + + ; 
 	 	 	 	 	 c o n f i g . m o d u l e S t a t s . b a d + + ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } 
 
 	 	 r u n L o g g i n g C a l l b a c k s (   " t e s t D o n e " ,   Q U n i t ,   { 
 	 	 	 n a m e :   t h i s . t e s t N a m e , 
 	 	 	 m o d u l e :   t h i s . m o d u l e , 
 	 	 	 f a i l e d :   b a d , 
 	 	 	 p a s s e d :   t h i s . a s s e r t i o n s . l e n g t h   -   b a d , 
 	 	 	 t o t a l :   t h i s . a s s e r t i o n s . l e n g t h , 
 	 	 	 r u n t i m e :   t h i s . r u n t i m e , 
 	 	 	 / /   D E P R E C A T E D :   t h i s   p r o p e r t y   w i l l   b e   r e m o v e d   i n   2 . 0 . 0 ,   u s e   r u n t i m e   i n s t e a d 
 	 	 	 d u r a t i o n :   t h i s . r u n t i m e 
 	 	 } ) ; 
 
 	 	 Q U n i t . r e s e t ( ) ; 
 
 	 	 c o n f i g . c u r r e n t   =   u n d e f i n e d ; 
 	 } , 
 
 	 q u e u e :   f u n c t i o n ( )   { 
 	 	 v a r   b a d , 
 	 	 	 t e s t   =   t h i s ; 
 
 	 	 s y n c h r o n i z e ( f u n c t i o n ( )   { 
 	 	 	 t e s t . i n i t ( ) ; 
 	 	 } ) ; 
 	 	 f u n c t i o n   r u n ( )   { 
 	 	 	 / /   e a c h   o f   t h e s e   c a n   b y   a s y n c 
 	 	 	 s y n c h r o n i z e ( f u n c t i o n ( )   { 
 	 	 	 	 t e s t . s e t u p ( ) ; 
 	 	 	 } ) ; 
 	 	 	 s y n c h r o n i z e ( f u n c t i o n ( )   { 
 	 	 	 	 t e s t . r u n ( ) ; 
 	 	 	 } ) ; 
 	 	 	 s y n c h r o n i z e ( f u n c t i o n ( )   { 
 	 	 	 	 t e s t . t e a r d o w n ( ) ; 
 	 	 	 } ) ; 
 	 	 	 s y n c h r o n i z e ( f u n c t i o n ( )   { 
 	 	 	 	 t e s t . f i n i s h ( ) ; 
 	 	 	 } ) ; 
 	 	 } 
 
 	 	 / /   ` b a d `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 / /   d e f e r   w h e n   p r e v i o u s   t e s t   r u n   p a s s e d ,   i f   s t o r a g e   i s   a v a i l a b l e 
 	 	 b a d   =   Q U n i t . c o n f i g . r e o r d e r   & &   d e f i n e d . s e s s i o n S t o r a g e   & & 
 	 	 	 	 	 	 + s e s s i o n S t o r a g e . g e t I t e m (   " q u n i t - t e s t - "   +   t h i s . m o d u l e   +   " - "   +   t h i s . t e s t N a m e   ) ; 
 
 	 	 i f   (   b a d   )   { 
 	 	 	 r u n ( ) ; 
 	 	 }   e l s e   { 
 	 	 	 s y n c h r o n i z e (   r u n ,   t r u e   ) ; 
 	 	 } 
 	 } 
 } ; 
 
 / /   ` a s s e r t `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 / /   A s s e r t   h e l p e r s 
 / /   A l l   o f   t h e s e   m u s t   e i t h e r   c a l l   Q U n i t . p u s h ( )   o r   m a n u a l l y   d o : 
 / /   -   r u n L o g g i n g C a l l b a c k s (   " l o g " ,   . .   ) ; 
 / /   -   c o n f i g . c u r r e n t . a s s e r t i o n s . p u s h ( {   . .   } ) ; 
 a s s e r t   =   Q U n i t . a s s e r t   =   { 
 	 / * * 
 	   *   A s s e r t s   r o u g h   t r u e - i s h   r e s u l t . 
 	   *   @ n a m e   o k 
 	   *   @ f u n c t i o n 
 	   *   @ e x a m p l e   o k (   " a s d f a s d f " . l e n g t h   >   5 ,   " T h e r e   m u s t   b e   a t   l e a s t   5   c h a r s "   ) ; 
 	   * / 
 	 o k :   f u n c t i o n (   r e s u l t ,   m s g   )   { 
 	 	 i f   (   ! c o n f i g . c u r r e n t   )   { 
 	 	 	 t h r o w   n e w   E r r o r (   " o k ( )   a s s e r t i o n   o u t s i d e   t e s t   c o n t e x t ,   w a s   "   +   s o u r c e F r o m S t a c k t r a c e ( 2 )   ) ; 
 	 	 } 
 	 	 r e s u l t   =   ! ! r e s u l t ; 
 	 	 m s g   =   m s g   | |   (   r e s u l t   ?   " o k a y "   :   " f a i l e d "   ) ; 
 
 	 	 v a r   s o u r c e , 
 	 	 	 d e t a i l s   =   { 
 	 	 	 	 m o d u l e :   c o n f i g . c u r r e n t . m o d u l e , 
 	 	 	 	 n a m e :   c o n f i g . c u r r e n t . t e s t N a m e , 
 	 	 	 	 r e s u l t :   r e s u l t , 
 	 	 	 	 m e s s a g e :   m s g 
 	 	 	 } ; 
 
 	 	 m s g   =   " < s p a n   c l a s s = ' t e s t - m e s s a g e ' > "   +   e s c a p e T e x t (   m s g   )   +   " < / s p a n > " ; 
 
 	 	 i f   (   ! r e s u l t   )   { 
 	 	 	 s o u r c e   =   s o u r c e F r o m S t a c k t r a c e (   2   ) ; 
 	 	 	 i f   (   s o u r c e   )   { 
 	 	 	 	 d e t a i l s . s o u r c e   =   s o u r c e ; 
 	 	 	 	 m s g   + =   " < t a b l e > < t r   c l a s s = ' t e s t - s o u r c e ' > < t h > S o u r c e :   < / t h > < t d > < p r e > "   + 
 	 	 	 	 	 e s c a p e T e x t (   s o u r c e   )   + 
 	 	 	 	 	 " < / p r e > < / t d > < / t r > < / t a b l e > " ; 
 	 	 	 } 
 	 	 } 
 	 	 r u n L o g g i n g C a l l b a c k s (   " l o g " ,   Q U n i t ,   d e t a i l s   ) ; 
 	 	 c o n f i g . c u r r e n t . a s s e r t i o n s . p u s h ( { 
 	 	 	 r e s u l t :   r e s u l t , 
 	 	 	 m e s s a g e :   m s g 
 	 	 } ) ; 
 	 } , 
 
 	 / * * 
 	   *   A s s e r t   t h a t   t h e   f i r s t   t w o   a r g u m e n t s   a r e   e q u a l ,   w i t h   a n   o p t i o n a l   m e s s a g e . 
 	   *   P r i n t s   o u t   b o t h   a c t u a l   a n d   e x p e c t e d   v a l u e s . 
 	   *   @ n a m e   e q u a l 
 	   *   @ f u n c t i o n 
 	   *   @ e x a m p l e   e q u a l (   f o r m a t (   " R e c e i v e d   { 0 }   b y t e s . " ,   2 ) ,   " R e c e i v e d   2   b y t e s . " ,   " f o r m a t ( )   r e p l a c e s   { 0 }   w i t h   n e x t   a r g u m e n t "   ) ; 
 	   * / 
 	 e q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 / * j s h i n t   e q e q e q : f a l s e   * / 
 	 	 Q U n i t . p u s h (   e x p e c t e d   = =   a c t u a l ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   n o t E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 n o t E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 / * j s h i n t   e q e q e q : f a l s e   * / 
 	 	 Q U n i t . p u s h (   e x p e c t e d   ! =   a c t u a l ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   p r o p E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 p r o p E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 a c t u a l   =   o b j e c t V a l u e s ( a c t u a l ) ; 
 	 	 e x p e c t e d   =   o b j e c t V a l u e s ( e x p e c t e d ) ; 
 	 	 Q U n i t . p u s h (   Q U n i t . e q u i v ( a c t u a l ,   e x p e c t e d ) ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   n o t P r o p E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 n o t P r o p E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 a c t u a l   =   o b j e c t V a l u e s ( a c t u a l ) ; 
 	 	 e x p e c t e d   =   o b j e c t V a l u e s ( e x p e c t e d ) ; 
 	 	 Q U n i t . p u s h (   ! Q U n i t . e q u i v ( a c t u a l ,   e x p e c t e d ) ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   d e e p E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 d e e p E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 Q U n i t . p u s h (   Q U n i t . e q u i v ( a c t u a l ,   e x p e c t e d ) ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   n o t D e e p E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 n o t D e e p E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 Q U n i t . p u s h (   ! Q U n i t . e q u i v ( a c t u a l ,   e x p e c t e d ) ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   s t r i c t E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 s t r i c t E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 Q U n i t . p u s h (   e x p e c t e d   = = =   a c t u a l ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 / * * 
 	   *   @ n a m e   n o t S t r i c t E q u a l 
 	   *   @ f u n c t i o n 
 	   * / 
 	 n o t S t r i c t E q u a l :   f u n c t i o n (   a c t u a l ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 Q U n i t . p u s h (   e x p e c t e d   ! = =   a c t u a l ,   a c t u a l ,   e x p e c t e d ,   m e s s a g e   ) ; 
 	 } , 
 
 	 " t h r o w s " :   f u n c t i o n (   b l o c k ,   e x p e c t e d ,   m e s s a g e   )   { 
 	 	 v a r   a c t u a l , 
 	 	 	 e x p e c t e d O u t p u t   =   e x p e c t e d , 
 	 	 	 o k   =   f a l s e ; 
 
 	 	 / /   ' e x p e c t e d '   i s   o p t i o n a l 
 	 	 i f   (   ! m e s s a g e   & &   t y p e o f   e x p e c t e d   = = =   " s t r i n g "   )   { 
 	 	 	 m e s s a g e   =   e x p e c t e d ; 
 	 	 	 e x p e c t e d   =   n u l l ; 
 	 	 } 
 
 	 	 c o n f i g . c u r r e n t . i g n o r e G l o b a l E r r o r s   =   t r u e ; 
 	 	 t r y   { 
 	 	 	 b l o c k . c a l l (   c o n f i g . c u r r e n t . t e s t E n v i r o n m e n t   ) ; 
 	 	 }   c a t c h   ( e )   { 
 	 	 	 a c t u a l   =   e ; 
 	 	 } 
 	 	 c o n f i g . c u r r e n t . i g n o r e G l o b a l E r r o r s   =   f a l s e ; 
 
 	 	 i f   (   a c t u a l   )   { 
 
 	 	 	 / /   w e   d o n ' t   w a n t   t o   v a l i d a t e   t h r o w n   e r r o r 
 	 	 	 i f   (   ! e x p e c t e d   )   { 
 	 	 	 	 o k   =   t r u e ; 
 	 	 	 	 e x p e c t e d O u t p u t   =   n u l l ; 
 
 	 	 	 / /   e x p e c t e d   i s   a n   E r r o r   o b j e c t 
 	 	 	 }   e l s e   i f   (   e x p e c t e d   i n s t a n c e o f   E r r o r   )   { 
 	 	 	 	 o k   =   a c t u a l   i n s t a n c e o f   E r r o r   & & 
 	 	 	 	 	   a c t u a l . n a m e   = = =   e x p e c t e d . n a m e   & & 
 	 	 	 	 	   a c t u a l . m e s s a g e   = = =   e x p e c t e d . m e s s a g e ; 
 
 	 	 	 / /   e x p e c t e d   i s   a   r e g e x p 
 	 	 	 }   e l s e   i f   (   Q U n i t . o b j e c t T y p e (   e x p e c t e d   )   = = =   " r e g e x p "   )   { 
 	 	 	 	 o k   =   e x p e c t e d . t e s t (   e r r o r S t r i n g (   a c t u a l   )   ) ; 
 
 	 	 	 / /   e x p e c t e d   i s   a   s t r i n g 
 	 	 	 }   e l s e   i f   (   Q U n i t . o b j e c t T y p e (   e x p e c t e d   )   = = =   " s t r i n g "   )   { 
 	 	 	 	 o k   =   e x p e c t e d   = = =   e r r o r S t r i n g (   a c t u a l   ) ; 
 
 	 	 	 / /   e x p e c t e d   i s   a   c o n s t r u c t o r 
 	 	 	 }   e l s e   i f   (   a c t u a l   i n s t a n c e o f   e x p e c t e d   )   { 
 	 	 	 	 o k   =   t r u e ; 
 
 	 	 	 / /   e x p e c t e d   i s   a   v a l i d a t i o n   f u n c t i o n   w h i c h   r e t u r n s   t r u e   i s   v a l i d a t i o n   p a s s e d 
 	 	 	 }   e l s e   i f   (   e x p e c t e d . c a l l (   { } ,   a c t u a l   )   = = =   t r u e   )   { 
 	 	 	 	 e x p e c t e d O u t p u t   =   n u l l ; 
 	 	 	 	 o k   =   t r u e ; 
 	 	 	 } 
 
 	 	 	 Q U n i t . p u s h (   o k ,   a c t u a l ,   e x p e c t e d O u t p u t ,   m e s s a g e   ) ; 
 	 	 }   e l s e   { 
 	 	 	 Q U n i t . p u s h F a i l u r e (   m e s s a g e ,   n u l l ,   " N o   e x c e p t i o n   w a s   t h r o w n . "   ) ; 
 	 	 } 
 	 } 
 } ; 
 
 / * * 
   *   @ d e p r e c a t e d   s i n c e   1 . 8 . 0 
   *   K e p t   a s s e r t i o n   h e l p e r s   i n   r o o t   f o r   b a c k w a r d s   c o m p a t i b i l i t y . 
   * / 
 e x t e n d (   Q U n i t . c o n s t r u c t o r . p r o t o t y p e ,   a s s e r t   ) ; 
 
 / * * 
   *   @ d e p r e c a t e d   s i n c e   1 . 9 . 0 
   *   K e p t   t o   a v o i d   T y p e E r r o r s   f o r   u n d e f i n e d   m e t h o d s . 
   * / 
 Q U n i t . c o n s t r u c t o r . p r o t o t y p e . r a i s e s   =   f u n c t i o n ( )   { 
 	 Q U n i t . p u s h (   f a l s e ,   f a l s e ,   f a l s e ,   " Q U n i t . r a i s e s   h a s   b e e n   d e p r e c a t e d   s i n c e   2 0 1 2   ( f a d 3 c 1 e a ) ,   u s e   Q U n i t . t h r o w s   i n s t e a d "   ) ; 
 } ; 
 
 / * * 
   *   @ d e p r e c a t e d   s i n c e   1 . 0 . 0 ,   r e p l a c e d   w i t h   e r r o r   p u s h e s   s i n c e   1 . 3 . 0 
   *   K e p t   t o   a v o i d   T y p e E r r o r s   f o r   u n d e f i n e d   m e t h o d s . 
   * / 
 Q U n i t . c o n s t r u c t o r . p r o t o t y p e . e q u a l s   =   f u n c t i o n ( )   { 
 	 Q U n i t . p u s h (   f a l s e ,   f a l s e ,   f a l s e ,   " Q U n i t . e q u a l s   h a s   b e e n   d e p r e c a t e d   s i n c e   2 0 0 9   ( e 8 8 0 4 9 a 0 ) ,   u s e   Q U n i t . e q u a l   i n s t e a d "   ) ; 
 } ; 
 Q U n i t . c o n s t r u c t o r . p r o t o t y p e . s a m e   =   f u n c t i o n ( )   { 
 	 Q U n i t . p u s h (   f a l s e ,   f a l s e ,   f a l s e ,   " Q U n i t . s a m e   h a s   b e e n   d e p r e c a t e d   s i n c e   2 0 0 9   ( e 8 8 0 4 9 a 0 ) ,   u s e   Q U n i t . d e e p E q u a l   i n s t e a d "   ) ; 
 } ; 
 
 / /   T e s t   f o r   e q u a l i t y   a n y   J a v a S c r i p t   t y p e . 
 / /   A u t h o r :   P h i l i p p e   R a t h �   < p r a t h e @ g m a i l . c o m > 
 Q U n i t . e q u i v   =   ( f u n c t i o n ( )   { 
 
 	 / /   C a l l   t h e   o   r e l a t e d   c a l l b a c k   w i t h   t h e   g i v e n   a r g u m e n t s . 
 	 f u n c t i o n   b i n d C a l l b a c k s (   o ,   c a l l b a c k s ,   a r g s   )   { 
 	 	 v a r   p r o p   =   Q U n i t . o b j e c t T y p e (   o   ) ; 
 	 	 i f   (   p r o p   )   { 
 	 	 	 i f   (   Q U n i t . o b j e c t T y p e (   c a l l b a c k s [   p r o p   ]   )   = = =   " f u n c t i o n "   )   { 
 	 	 	 	 r e t u r n   c a l l b a c k s [   p r o p   ] . a p p l y (   c a l l b a c k s ,   a r g s   ) ; 
 	 	 	 }   e l s e   { 
 	 	 	 	 r e t u r n   c a l l b a c k s [   p r o p   ] ;   / /   o r   u n d e f i n e d 
 	 	 	 } 
 	 	 } 
 	 } 
 
 	 / /   t h e   r e a l   e q u i v   f u n c t i o n 
 	 v a r   i n n e r E q u i v , 
 	 	 / /   s t a c k   t o   d e c i d e   b e t w e e n   s k i p / a b o r t   f u n c t i o n s 
 	 	 c a l l e r s   =   [ ] , 
 	 	 / /   s t a c k   t o   a v o i d i n g   l o o p s   f r o m   c i r c u l a r   r e f e r e n c i n g 
 	 	 p a r e n t s   =   [ ] , 
 	 	 p a r e n t s B   =   [ ] , 
 
 	 	 g e t P r o t o   =   O b j e c t . g e t P r o t o t y p e O f   | |   f u n c t i o n   (   o b j   )   { 
 	 	 	 / * j s h i n t   c a m e l c a s e : f a l s e   * / 
 	 	 	 r e t u r n   o b j . _ _ p r o t o _ _ ; 
 	 	 } , 
 	 	 c a l l b a c k s   =   ( f u n c t i o n   ( )   { 
 
 	 	 	 / /   f o r   s t r i n g ,   b o o l e a n ,   n u m b e r   a n d   n u l l 
 	 	 	 f u n c t i o n   u s e S t r i c t E q u a l i t y (   b ,   a   )   { 
 	 	 	 	 / * j s h i n t   e q e q e q : f a l s e   * / 
 	 	 	 	 i f   (   b   i n s t a n c e o f   a . c o n s t r u c t o r   | |   a   i n s t a n c e o f   b . c o n s t r u c t o r   )   { 
 	 	 	 	 	 / /   t o   c a t c h   s h o r t   a n n o t a t i o n   V S   ' n e w '   a n n o t a t i o n   o f   a 
 	 	 	 	 	 / /   d e c l a r a t i o n 
 	 	 	 	 	 / /   e . g .   v a r   i   =   1 ; 
 	 	 	 	 	 / /   v a r   j   =   n e w   N u m b e r ( 1 ) ; 
 	 	 	 	 	 r e t u r n   a   = =   b ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 r e t u r n   a   = = =   b ; 
 	 	 	 	 } 
 	 	 	 } 
 
 	 	 	 r e t u r n   { 
 	 	 	 	 " s t r i n g " :   u s e S t r i c t E q u a l i t y , 
 	 	 	 	 " b o o l e a n " :   u s e S t r i c t E q u a l i t y , 
 	 	 	 	 " n u m b e r " :   u s e S t r i c t E q u a l i t y , 
 	 	 	 	 " n u l l " :   u s e S t r i c t E q u a l i t y , 
 	 	 	 	 " u n d e f i n e d " :   u s e S t r i c t E q u a l i t y , 
 
 	 	 	 	 " n a n " :   f u n c t i o n (   b   )   { 
 	 	 	 	 	 r e t u r n   i s N a N (   b   ) ; 
 	 	 	 	 } , 
 
 	 	 	 	 " d a t e " :   f u n c t i o n (   b ,   a   )   { 
 	 	 	 	 	 r e t u r n   Q U n i t . o b j e c t T y p e (   b   )   = = =   " d a t e "   & &   a . v a l u e O f ( )   = = =   b . v a l u e O f ( ) ; 
 	 	 	 	 } , 
 
 	 	 	 	 " r e g e x p " :   f u n c t i o n (   b ,   a   )   { 
 	 	 	 	 	 r e t u r n   Q U n i t . o b j e c t T y p e (   b   )   = = =   " r e g e x p "   & & 
 	 	 	 	 	 	 / /   t h e   r e g e x   i t s e l f 
 	 	 	 	 	 	 a . s o u r c e   = = =   b . s o u r c e   & & 
 	 	 	 	 	 	 / /   a n d   i t s   m o d i f i e r s 
 	 	 	 	 	 	 a . g l o b a l   = = =   b . g l o b a l   & & 
 	 	 	 	 	 	 / /   ( g m i )   . . . 
 	 	 	 	 	 	 a . i g n o r e C a s e   = = =   b . i g n o r e C a s e   & & 
 	 	 	 	 	 	 a . m u l t i l i n e   = = =   b . m u l t i l i n e   & & 
 	 	 	 	 	 	 a . s t i c k y   = = =   b . s t i c k y ; 
 	 	 	 	 } , 
 
 	 	 	 	 / /   -   s k i p   w h e n   t h e   p r o p e r t y   i s   a   m e t h o d   o f   a n   i n s t a n c e   ( O O P ) 
 	 	 	 	 / /   -   a b o r t   o t h e r w i s e , 
 	 	 	 	 / /   i n i t i a l   = = =   w o u l d   h a v e   c a t c h   i d e n t i c a l   r e f e r e n c e s   a n y w a y 
 	 	 	 	 " f u n c t i o n " :   f u n c t i o n ( )   { 
 	 	 	 	 	 v a r   c a l l e r   =   c a l l e r s [ c a l l e r s . l e n g t h   -   1 ] ; 
 	 	 	 	 	 r e t u r n   c a l l e r   ! = =   O b j e c t   & &   t y p e o f   c a l l e r   ! = =   " u n d e f i n e d " ; 
 	 	 	 	 } , 
 
 	 	 	 	 " a r r a y " :   f u n c t i o n (   b ,   a   )   { 
 	 	 	 	 	 v a r   i ,   j ,   l e n ,   l o o p ,   a C i r c u l a r ,   b C i r c u l a r ; 
 
 	 	 	 	 	 / /   b   c o u l d   b e   a n   o b j e c t   l i t e r a l   h e r e 
 	 	 	 	 	 i f   (   Q U n i t . o b j e c t T y p e (   b   )   ! = =   " a r r a y "   )   { 
 	 	 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 	 	 } 
 
 	 	 	 	 	 l e n   =   a . l e n g t h ; 
 	 	 	 	 	 i f   (   l e n   ! = =   b . l e n g t h   )   { 
 	 	 	 	 	 	 / /   s a f e   a n d   f a s t e r 
 	 	 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 	 	 } 
 
 	 	 	 	 	 / /   t r a c k   r e f e r e n c e   t o   a v o i d   c i r c u l a r   r e f e r e n c e s 
 	 	 	 	 	 p a r e n t s . p u s h (   a   ) ; 
 	 	 	 	 	 p a r e n t s B . p u s h (   b   ) ; 
 	 	 	 	 	 f o r   (   i   =   0 ;   i   <   l e n ;   i + +   )   { 
 	 	 	 	 	 	 l o o p   =   f a l s e ; 
 	 	 	 	 	 	 f o r   (   j   =   0 ;   j   <   p a r e n t s . l e n g t h ;   j + +   )   { 
 	 	 	 	 	 	 	 a C i r c u l a r   =   p a r e n t s [ j ]   = = =   a [ i ] ; 
 	 	 	 	 	 	 	 b C i r c u l a r   =   p a r e n t s B [ j ]   = = =   b [ i ] ; 
 	 	 	 	 	 	 	 i f   (   a C i r c u l a r   | |   b C i r c u l a r   )   { 
 	 	 	 	 	 	 	 	 i f   (   a [ i ]   = = =   b [ i ]   | |   a C i r c u l a r   & &   b C i r c u l a r   )   { 
 	 	 	 	 	 	 	 	 	 l o o p   =   t r u e ; 
 	 	 	 	 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 	 	 	 	 p a r e n t s . p o p ( ) ; 
 	 	 	 	 	 	 	 	 	 p a r e n t s B . p o p ( ) ; 
 	 	 	 	 	 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 	 	 	 	 	 } 
 	 	 	 	 	 	 	 } 
 	 	 	 	 	 	 } 
 	 	 	 	 	 	 i f   (   ! l o o p   & &   ! i n n e r E q u i v ( a [ i ] ,   b [ i ] )   )   { 
 	 	 	 	 	 	 	 p a r e n t s . p o p ( ) ; 
 	 	 	 	 	 	 	 p a r e n t s B . p o p ( ) ; 
 	 	 	 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 	 	 	 } 
 	 	 	 	 	 } 
 	 	 	 	 	 p a r e n t s . p o p ( ) ; 
 	 	 	 	 	 p a r e n t s B . p o p ( ) ; 
 	 	 	 	 	 r e t u r n   t r u e ; 
 	 	 	 	 } , 
 
 	 	 	 	 " o b j e c t " :   f u n c t i o n (   b ,   a   )   { 
 	 	 	 	 	 / * j s h i n t   f o r i n : f a l s e   * / 
 	 	 	 	 	 v a r   i ,   j ,   l o o p ,   a C i r c u l a r ,   b C i r c u l a r , 
 	 	 	 	 	 	 / /   D e f a u l t   t o   t r u e 
 	 	 	 	 	 	 e q   =   t r u e , 
 	 	 	 	 	 	 a P r o p e r t i e s   =   [ ] , 
 	 	 	 	 	 	 b P r o p e r t i e s   =   [ ] ; 
 
 	 	 	 	 	 / /   c o m p a r i n g   c o n s t r u c t o r s   i s   m o r e   s t r i c t   t h a n   u s i n g 
 	 	 	 	 	 / /   i n s t a n c e o f 
 	 	 	 	 	 i f   (   a . c o n s t r u c t o r   ! = =   b . c o n s t r u c t o r   )   { 
 	 	 	 	 	 	 / /   A l l o w   o b j e c t s   w i t h   n o   p r o t o t y p e   t o   b e   e q u i v a l e n t   t o 
 	 	 	 	 	 	 / /   o b j e c t s   w i t h   O b j e c t   a s   t h e i r   c o n s t r u c t o r . 
 	 	 	 	 	 	 i f   (   ! ( (   g e t P r o t o ( a )   = = =   n u l l   & &   g e t P r o t o ( b )   = = =   O b j e c t . p r o t o t y p e   )   | | 
 	 	 	 	 	 	 	 (   g e t P r o t o ( b )   = = =   n u l l   & &   g e t P r o t o ( a )   = = =   O b j e c t . p r o t o t y p e   )   )   )   { 
 	 	 	 	 	 	 	 	 r e t u r n   f a l s e ; 
 	 	 	 	 	 	 } 
 	 	 	 	 	 } 
 
 	 	 	 	 	 / /   s t a c k   c o n s t r u c t o r   b e f o r e   t r a v e r s i n g   p r o p e r t i e s 
 	 	 	 	 	 c a l l e r s . p u s h (   a . c o n s t r u c t o r   ) ; 
 
 	 	 	 	 	 / /   t r a c k   r e f e r e n c e   t o   a v o i d   c i r c u l a r   r e f e r e n c e s 
 	 	 	 	 	 p a r e n t s . p u s h (   a   ) ; 
 	 	 	 	 	 p a r e n t s B . p u s h (   b   ) ; 
 
 	 	 	 	 	 / /   b e   s t r i c t :   d o n ' t   e n s u r e   h a s O w n P r o p e r t y   a n d   g o   d e e p 
 	 	 	 	 	 f o r   (   i   i n   a   )   { 
 	 	 	 	 	 	 l o o p   =   f a l s e ; 
 	 	 	 	 	 	 f o r   (   j   =   0 ;   j   <   p a r e n t s . l e n g t h ;   j + +   )   { 
 	 	 	 	 	 	 	 a C i r c u l a r   =   p a r e n t s [ j ]   = = =   a [ i ] ; 
 	 	 	 	 	 	 	 b C i r c u l a r   =   p a r e n t s B [ j ]   = = =   b [ i ] ; 
 	 	 	 	 	 	 	 i f   (   a C i r c u l a r   | |   b C i r c u l a r   )   { 
 	 	 	 	 	 	 	 	 i f   (   a [ i ]   = = =   b [ i ]   | |   a C i r c u l a r   & &   b C i r c u l a r   )   { 
 	 	 	 	 	 	 	 	 	 l o o p   =   t r u e ; 
 	 	 	 	 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 	 	 	 	 e q   =   f a l s e ; 
 	 	 	 	 	 	 	 	 	 b r e a k ; 
 	 	 	 	 	 	 	 	 } 
 	 	 	 	 	 	 	 } 
 	 	 	 	 	 	 } 
 	 	 	 	 	 	 a P r o p e r t i e s . p u s h ( i ) ; 
 	 	 	 	 	 	 i f   (   ! l o o p   & &   ! i n n e r E q u i v ( a [ i ] ,   b [ i ] )   )   { 
 	 	 	 	 	 	 	 e q   =   f a l s e ; 
 	 	 	 	 	 	 	 b r e a k ; 
 	 	 	 	 	 	 } 
 	 	 	 	 	 } 
 
 	 	 	 	 	 p a r e n t s . p o p ( ) ; 
 	 	 	 	 	 p a r e n t s B . p o p ( ) ; 
 	 	 	 	 	 c a l l e r s . p o p ( ) ;   / /   u n s t a c k ,   w e   a r e   d o n e 
 
 	 	 	 	 	 f o r   (   i   i n   b   )   { 
 	 	 	 	 	 	 b P r o p e r t i e s . p u s h (   i   ) ;   / /   c o l l e c t   b ' s   p r o p e r t i e s 
 	 	 	 	 	 } 
 
 	 	 	 	 	 / /   E n s u r e s   i d e n t i c a l   p r o p e r t i e s   n a m e 
 	 	 	 	 	 r e t u r n   e q   & &   i n n e r E q u i v (   a P r o p e r t i e s . s o r t ( ) ,   b P r o p e r t i e s . s o r t ( )   ) ; 
 	 	 	 	 } 
 	 	 	 } ; 
 	 	 } ( ) ) ; 
 
 	 i n n e r E q u i v   =   f u n c t i o n ( )   {   / /   c a n   t a k e   m u l t i p l e   a r g u m e n t s 
 	 	 v a r   a r g s   =   [ ] . s l i c e . a p p l y (   a r g u m e n t s   ) ; 
 	 	 i f   (   a r g s . l e n g t h   <   2   )   { 
 	 	 	 r e t u r n   t r u e ;   / /   e n d   t r a n s i t i o n 
 	 	 } 
 
 	 	 r e t u r n   ( f u n c t i o n (   a ,   b   )   { 
 	 	 	 i f   (   a   = = =   b   )   { 
 	 	 	 	 r e t u r n   t r u e ;   / /   c a t c h   t h e   m o s t   y o u   c a n 
 	 	 	 }   e l s e   i f   (   a   = = =   n u l l   | |   b   = = =   n u l l   | |   t y p e o f   a   = = =   " u n d e f i n e d "   | | 
 	 	 	 	 	 t y p e o f   b   = = =   " u n d e f i n e d "   | | 
 	 	 	 	 	 Q U n i t . o b j e c t T y p e ( a )   ! = =   Q U n i t . o b j e c t T y p e ( b )   )   { 
 	 	 	 	 r e t u r n   f a l s e ;   / /   d o n ' t   l o s e   t i m e   w i t h   e r r o r   p r o n e   c a s e s 
 	 	 	 }   e l s e   { 
 	 	 	 	 r e t u r n   b i n d C a l l b a c k s ( a ,   c a l l b a c k s ,   [   b ,   a   ] ) ; 
 	 	 	 } 
 
 	 	 	 / /   a p p l y   t r a n s i t i o n   w i t h   ( 1 . . n )   a r g u m e n t s 
 	 	 } (   a r g s [ 0 ] ,   a r g s [ 1 ]   )   & &   i n n e r E q u i v . a p p l y (   t h i s ,   a r g s . s p l i c e ( 1 ,   a r g s . l e n g t h   -   1   ) )   ) ; 
 	 } ; 
 
 	 r e t u r n   i n n e r E q u i v ; 
 } ( ) ) ; 
 
 / * * 
   *   j s D u m p   C o p y r i g h t   ( c )   2 0 0 8   A r i e l   F l e s l e r   -   a f l e s l e r ( a t ) g m a i l ( d o t ) c o m   | 
   *   h t t p : / / f l e s l e r . b l o g s p o t . c o m   L i c e n s e d   u n d e r   B S D 
   *   ( h t t p : / / w w w . o p e n s o u r c e . o r g / l i c e n s e s / b s d - l i c e n s e . p h p )   D a t e :   5 / 1 5 / 2 0 0 8 
   * 
   *   @ p r o j e c t D e s c r i p t i o n   A d v a n c e d   a n d   e x t e n s i b l e   d a t a   d u m p i n g   f o r   J a v a s c r i p t . 
   *   @ v e r s i o n   1 . 0 . 0 
   *   @ a u t h o r   A r i e l   F l e s l e r 
   *   @ l i n k   { h t t p : / / f l e s l e r . b l o g s p o t . c o m / 2 0 0 8 / 0 5 / j s d u m p - p r e t t y - d u m p - o f - a n y - j a v a s c r i p t . h t m l } 
   * / 
 Q U n i t . j s D u m p   =   ( f u n c t i o n ( )   { 
 	 f u n c t i o n   q u o t e (   s t r   )   { 
 	 	 r e t u r n   " \ " "   +   s t r . t o S t r i n g ( ) . r e p l a c e (   / " / g ,   " \ \ \ " "   )   +   " \ " " ; 
 	 } 
 	 f u n c t i o n   l i t e r a l (   o   )   { 
 	 	 r e t u r n   o   +   " " ; 
 	 } 
 	 f u n c t i o n   j o i n (   p r e ,   a r r ,   p o s t   )   { 
 	 	 v a r   s   =   j s D u m p . s e p a r a t o r ( ) , 
 	 	 	 b a s e   =   j s D u m p . i n d e n t ( ) , 
 	 	 	 i n n e r   =   j s D u m p . i n d e n t ( 1 ) ; 
 	 	 i f   (   a r r . j o i n   )   { 
 	 	 	 a r r   =   a r r . j o i n (   " , "   +   s   +   i n n e r   ) ; 
 	 	 } 
 	 	 i f   (   ! a r r   )   { 
 	 	 	 r e t u r n   p r e   +   p o s t ; 
 	 	 } 
 	 	 r e t u r n   [   p r e ,   i n n e r   +   a r r ,   b a s e   +   p o s t   ] . j o i n ( s ) ; 
 	 } 
 	 f u n c t i o n   a r r a y (   a r r ,   s t a c k   )   { 
 	 	 v a r   i   =   a r r . l e n g t h ,   r e t   =   n e w   A r r a y ( i ) ; 
 	 	 t h i s . u p ( ) ; 
 	 	 w h i l e   (   i - -   )   { 
 	 	 	 r e t [ i ]   =   t h i s . p a r s e (   a r r [ i ]   ,   u n d e f i n e d   ,   s t a c k ) ; 
 	 	 } 
 	 	 t h i s . d o w n ( ) ; 
 	 	 r e t u r n   j o i n (   " [ " ,   r e t ,   " ] "   ) ; 
 	 } 
 
 	 v a r   r e N a m e   =   / ^ f u n c t i o n   ( \ w + ) / , 
 	 	 j s D u m p   =   { 
 	 	 	 / /   t y p e   i s   u s e d   m o s t l y   i n t e r n a l l y ,   y o u   c a n   f i x   a   ( c u s t o m ) t y p e   i n   a d v a n c e 
 	 	 	 p a r s e :   f u n c t i o n (   o b j ,   t y p e ,   s t a c k   )   { 
 	 	 	 	 s t a c k   =   s t a c k   | |   [   ] ; 
 	 	 	 	 v a r   i n S t a c k ,   r e s , 
 	 	 	 	 	 p a r s e r   =   t h i s . p a r s e r s [   t y p e   | |   t h i s . t y p e O f ( o b j )   ] ; 
 
 	 	 	 	 t y p e   =   t y p e o f   p a r s e r ; 
 	 	 	 	 i n S t a c k   =   i n A r r a y (   o b j ,   s t a c k   ) ; 
 
 	 	 	 	 i f   (   i n S t a c k   ! = =   - 1   )   { 
 	 	 	 	 	 r e t u r n   " r e c u r s i o n ( "   +   ( i n S t a c k   -   s t a c k . l e n g t h )   +   " ) " ; 
 	 	 	 	 } 
 	 	 	 	 i f   (   t y p e   = = =   " f u n c t i o n "   )     { 
 	 	 	 	 	 s t a c k . p u s h (   o b j   ) ; 
 	 	 	 	 	 r e s   =   p a r s e r . c a l l (   t h i s ,   o b j ,   s t a c k   ) ; 
 	 	 	 	 	 s t a c k . p o p ( ) ; 
 	 	 	 	 	 r e t u r n   r e s ; 
 	 	 	 	 } 
 	 	 	 	 r e t u r n   (   t y p e   = = =   " s t r i n g "   )   ?   p a r s e r   :   t h i s . p a r s e r s . e r r o r ; 
 	 	 	 } , 
 	 	 	 t y p e O f :   f u n c t i o n (   o b j   )   { 
 	 	 	 	 v a r   t y p e ; 
 	 	 	 	 i f   (   o b j   = = =   n u l l   )   { 
 	 	 	 	 	 t y p e   =   " n u l l " ; 
 	 	 	 	 }   e l s e   i f   (   t y p e o f   o b j   = = =   " u n d e f i n e d "   )   { 
 	 	 	 	 	 t y p e   =   " u n d e f i n e d " ; 
 	 	 	 	 }   e l s e   i f   (   Q U n i t . i s (   " r e g e x p " ,   o b j )   )   { 
 	 	 	 	 	 t y p e   =   " r e g e x p " ; 
 	 	 	 	 }   e l s e   i f   (   Q U n i t . i s (   " d a t e " ,   o b j )   )   { 
 	 	 	 	 	 t y p e   =   " d a t e " ; 
 	 	 	 	 }   e l s e   i f   (   Q U n i t . i s (   " f u n c t i o n " ,   o b j )   )   { 
 	 	 	 	 	 t y p e   =   " f u n c t i o n " ; 
 	 	 	 	 }   e l s e   i f   (   t y p e o f   o b j . s e t I n t e r v a l   ! = =   u n d e f i n e d   & &   t y p e o f   o b j . d o c u m e n t   ! = =   " u n d e f i n e d "   & &   t y p e o f   o b j . n o d e T y p e   = = =   " u n d e f i n e d "   )   { 
 	 	 	 	 	 t y p e   =   " w i n d o w " ; 
 	 	 	 	 }   e l s e   i f   (   o b j . n o d e T y p e   = = =   9   )   { 
 	 	 	 	 	 t y p e   =   " d o c u m e n t " ; 
 	 	 	 	 }   e l s e   i f   (   o b j . n o d e T y p e   )   { 
 	 	 	 	 	 t y p e   =   " n o d e " ; 
 	 	 	 	 }   e l s e   i f   ( 
 	 	 	 	 	 / /   n a t i v e   a r r a y s 
 	 	 	 	 	 t o S t r i n g . c a l l (   o b j   )   = = =   " [ o b j e c t   A r r a y ] "   | | 
 	 	 	 	 	 / /   N o d e L i s t   o b j e c t s 
 	 	 	 	 	 (   t y p e o f   o b j . l e n g t h   = = =   " n u m b e r "   & &   t y p e o f   o b j . i t e m   ! = =   " u n d e f i n e d "   & &   (   o b j . l e n g t h   ?   o b j . i t e m ( 0 )   = = =   o b j [ 0 ]   :   (   o b j . i t e m (   0   )   = = =   n u l l   & &   t y p e o f   o b j [ 0 ]   = = =   " u n d e f i n e d "   )   )   ) 
 	 	 	 	 )   { 
 	 	 	 	 	 t y p e   =   " a r r a y " ; 
 	 	 	 	 }   e l s e   i f   (   o b j . c o n s t r u c t o r   = = =   E r r o r . p r o t o t y p e . c o n s t r u c t o r   )   { 
 	 	 	 	 	 t y p e   =   " e r r o r " ; 
 	 	 	 	 }   e l s e   { 
 	 	 	 	 	 t y p e   =   t y p e o f   o b j ; 
 	 	 	 	 } 
 	 	 	 	 r e t u r n   t y p e ; 
 	 	 	 } , 
 	 	 	 s e p a r a t o r :   f u n c t i o n ( )   { 
 	 	 	 	 r e t u r n   t h i s . m u l t i l i n e   ? 	 t h i s . H T M L   ?   " < b r   / > "   :   " \ n "   :   t h i s . H T M L   ?   " & n b s p ; "   :   "   " ; 
 	 	 	 } , 
 	 	 	 / /   e x t r a   c a n   b e   a   n u m b e r ,   s h o r t c u t   f o r   i n c r e a s i n g - c a l l i n g - d e c r e a s i n g 
 	 	 	 i n d e n t :   f u n c t i o n (   e x t r a   )   { 
 	 	 	 	 i f   (   ! t h i s . m u l t i l i n e   )   { 
 	 	 	 	 	 r e t u r n   " " ; 
 	 	 	 	 } 
 	 	 	 	 v a r   c h r   =   t h i s . i n d e n t C h a r ; 
 	 	 	 	 i f   (   t h i s . H T M L   )   { 
 	 	 	 	 	 c h r   =   c h r . r e p l a c e (   / \ t / g ,   "       "   ) . r e p l a c e (   /   / g ,   " & n b s p ; "   ) ; 
 	 	 	 	 } 
 	 	 	 	 r e t u r n   n e w   A r r a y (   t h i s . d e p t h   +   (   e x t r a   | |   0   )   ) . j o i n ( c h r ) ; 
 	 	 	 } , 
 	 	 	 u p :   f u n c t i o n (   a   )   { 
 	 	 	 	 t h i s . d e p t h   + =   a   | |   1 ; 
 	 	 	 } , 
 	 	 	 d o w n :   f u n c t i o n (   a   )   { 
 	 	 	 	 t h i s . d e p t h   - =   a   | |   1 ; 
 	 	 	 } , 
 	 	 	 s e t P a r s e r :   f u n c t i o n (   n a m e ,   p a r s e r   )   { 
 	 	 	 	 t h i s . p a r s e r s [ n a m e ]   =   p a r s e r ; 
 	 	 	 } , 
 	 	 	 / /   T h e   n e x t   3   a r e   e x p o s e d   s o   y o u   c a n   u s e   t h e m 
 	 	 	 q u o t e :   q u o t e , 
 	 	 	 l i t e r a l :   l i t e r a l , 
 	 	 	 j o i n :   j o i n , 
 	 	 	 / / 
 	 	 	 d e p t h :   1 , 
 	 	 	 / /   T h i s   i s   t h e   l i s t   o f   p a r s e r s ,   t o   m o d i f y   t h e m ,   u s e   j s D u m p . s e t P a r s e r 
 	 	 	 p a r s e r s :   { 
 	 	 	 	 w i n d o w :   " [ W i n d o w ] " , 
 	 	 	 	 d o c u m e n t :   " [ D o c u m e n t ] " , 
 	 	 	 	 e r r o r :   f u n c t i o n ( e r r o r )   { 
 	 	 	 	 	 r e t u r n   " E r r o r ( \ " "   +   e r r o r . m e s s a g e   +   " \ " ) " ; 
 	 	 	 	 } , 
 	 	 	 	 u n k n o w n :   " [ U n k n o w n ] " , 
 	 	 	 	 " n u l l " :   " n u l l " , 
 	 	 	 	 " u n d e f i n e d " :   " u n d e f i n e d " , 
 	 	 	 	 " f u n c t i o n " :   f u n c t i o n (   f n   )   { 
 	 	 	 	 	 v a r   r e t   =   " f u n c t i o n " , 
 	 	 	 	 	 	 / /   f u n c t i o n s   n e v e r   h a v e   n a m e   i n   I E 
 	 	 	 	 	 	 n a m e   =   " n a m e "   i n   f n   ?   f n . n a m e   :   ( r e N a m e . e x e c ( f n )   | |   [ ] ) [ 1 ] ; 
 
 	 	 	 	 	 i f   (   n a m e   )   { 
 	 	 	 	 	 	 r e t   + =   "   "   +   n a m e ; 
 	 	 	 	 	 } 
 	 	 	 	 	 r e t   + =   " (   " ; 
 
 	 	 	 	 	 r e t   =   [   r e t ,   Q U n i t . j s D u m p . p a r s e (   f n ,   " f u n c t i o n A r g s "   ) ,   " ) { "   ] . j o i n (   " "   ) ; 
 	 	 	 	 	 r e t u r n   j o i n (   r e t ,   Q U n i t . j s D u m p . p a r s e ( f n , " f u n c t i o n C o d e "   ) ,   " } "   ) ; 
 	 	 	 	 } , 
 	 	 	 	 a r r a y :   a r r a y , 
 	 	 	 	 n o d e l i s t :   a r r a y , 
 	 	 	 	 " a r g u m e n t s " :   a r r a y , 
 	 	 	 	 o b j e c t :   f u n c t i o n (   m a p ,   s t a c k   )   { 
 	 	 	 	 	 / * j s h i n t   f o r i n : f a l s e   * / 
 	 	 	 	 	 v a r   r e t   =   [   ] ,   k e y s ,   k e y ,   v a l ,   i ; 
 	 	 	 	 	 Q U n i t . j s D u m p . u p ( ) ; 
 	 	 	 	 	 k e y s   =   [ ] ; 
 	 	 	 	 	 f o r   (   k e y   i n   m a p   )   { 
 	 	 	 	 	 	 k e y s . p u s h (   k e y   ) ; 
 	 	 	 	 	 } 
 	 	 	 	 	 k e y s . s o r t ( ) ; 
 	 	 	 	 	 f o r   (   i   =   0 ;   i   <   k e y s . l e n g t h ;   i + +   )   { 
 	 	 	 	 	 	 k e y   =   k e y s [   i   ] ; 
 	 	 	 	 	 	 v a l   =   m a p [   k e y   ] ; 
 	 	 	 	 	 	 r e t . p u s h (   Q U n i t . j s D u m p . p a r s e (   k e y ,   " k e y "   )   +   " :   "   +   Q U n i t . j s D u m p . p a r s e (   v a l ,   u n d e f i n e d ,   s t a c k   )   ) ; 
 	 	 	 	 	 } 
 	 	 	 	 	 Q U n i t . j s D u m p . d o w n ( ) ; 
 	 	 	 	 	 r e t u r n   j o i n (   " { " ,   r e t ,   " } "   ) ; 
 	 	 	 	 } , 
 	 	 	 	 n o d e :   f u n c t i o n (   n o d e   )   { 
 	 	 	 	 	 v a r   l e n ,   i ,   v a l , 
 	 	 	 	 	 	 o p e n   =   Q U n i t . j s D u m p . H T M L   ?   " & l t ; "   :   " < " , 
 	 	 	 	 	 	 c l o s e   =   Q U n i t . j s D u m p . H T M L   ?   " & g t ; "   :   " > " , 
 	 	 	 	 	 	 t a g   =   n o d e . n o d e N a m e . t o L o w e r C a s e ( ) , 
 	 	 	 	 	 	 r e t   =   o p e n   +   t a g , 
 	 	 	 	 	 	 a t t r s   =   n o d e . a t t r i b u t e s ; 
 
 	 	 	 	 	 i f   (   a t t r s   )   { 
 	 	 	 	 	 	 f o r   (   i   =   0 ,   l e n   =   a t t r s . l e n g t h ;   i   <   l e n ;   i + +   )   { 
 	 	 	 	 	 	 	 v a l   =   a t t r s [ i ] . n o d e V a l u e ; 
 	 	 	 	 	 	 	 / /   I E 6   i n c l u d e s   a l l   a t t r i b u t e s   i n   . a t t r i b u t e s ,   e v e n   o n e s   n o t   e x p l i c i t l y   s e t . 
 	 	 	 	 	 	 	 / /   T h o s e   h a v e   v a l u e s   l i k e   u n d e f i n e d ,   n u l l ,   0 ,   f a l s e ,   " "   o r   " i n h e r i t " . 
 	 	 	 	 	 	 	 i f   (   v a l   & &   v a l   ! = =   " i n h e r i t "   )   { 
 	 	 	 	 	 	 	 	 r e t   + =   "   "   +   a t t r s [ i ] . n o d e N a m e   +   " = "   +   Q U n i t . j s D u m p . p a r s e (   v a l ,   " a t t r i b u t e "   ) ; 
 	 	 	 	 	 	 	 } 
 	 	 	 	 	 	 } 
 	 	 	 	 	 } 
 	 	 	 	 	 r e t   + =   c l o s e ; 
 
 	 	 	 	 	 / /   S h o w   c o n t e n t   o f   T e x t N o d e   o r   C D A T A S e c t i o n 
 	 	 	 	 	 i f   (   n o d e . n o d e T y p e   = = =   3   | |   n o d e . n o d e T y p e   = = =   4   )   { 
 	 	 	 	 	 	 r e t   + =   n o d e . n o d e V a l u e ; 
 	 	 	 	 	 } 
 
 	 	 	 	 	 r e t u r n   r e t   +   o p e n   +   " / "   +   t a g   +   c l o s e ; 
 	 	 	 	 } , 
 	 	 	 	 / /   f u n c t i o n   c a l l s   i t   i n t e r n a l l y ,   i t ' s   t h e   a r g u m e n t s   p a r t   o f   t h e   f u n c t i o n 
 	 	 	 	 f u n c t i o n A r g s :   f u n c t i o n (   f n   )   { 
 	 	 	 	 	 v a r   a r g s , 
 	 	 	 	 	 	 l   =   f n . l e n g t h ; 
 
 	 	 	 	 	 i f   (   ! l   )   { 
 	 	 	 	 	 	 r e t u r n   " " ; 
 	 	 	 	 	 } 
 
 	 	 	 	 	 a r g s   =   n e w   A r r a y ( l ) ; 
 	 	 	 	 	 w h i l e   (   l - -   )   { 
 	 	 	 	 	 	 / /   9 7   i s   ' a ' 
 	 	 	 	 	 	 a r g s [ l ]   =   S t r i n g . f r o m C h a r C o d e ( 9 7 + l ) ; 
 	 	 	 	 	 } 
 	 	 	 	 	 r e t u r n   "   "   +   a r g s . j o i n (   " ,   "   )   +   "   " ; 
 	 	 	 	 } , 
 	 	 	 	 / /   o b j e c t   c a l l s   i t   i n t e r n a l l y ,   t h e   k e y   p a r t   o f   a n   i t e m   i n   a   m a p 
 	 	 	 	 k e y :   q u o t e , 
 	 	 	 	 / /   f u n c t i o n   c a l l s   i t   i n t e r n a l l y ,   i t ' s   t h e   c o n t e n t   o f   t h e   f u n c t i o n 
 	 	 	 	 f u n c t i o n C o d e :   " [ c o d e ] " , 
 	 	 	 	 / /   n o d e   c a l l s   i t   i n t e r n a l l y ,   i t ' s   a n   h t m l   a t t r i b u t e   v a l u e 
 	 	 	 	 a t t r i b u t e :   q u o t e , 
 	 	 	 	 s t r i n g :   q u o t e , 
 	 	 	 	 d a t e :   q u o t e , 
 	 	 	 	 r e g e x p :   l i t e r a l , 
 	 	 	 	 n u m b e r :   l i t e r a l , 
 	 	 	 	 " b o o l e a n " :   l i t e r a l 
 	 	 	 } , 
 	 	 	 / /   i f   t r u e ,   e n t i t i e s   a r e   e s c a p e d   (   < ,   > ,   \ t ,   s p a c e   a n d   \ n   ) 
 	 	 	 H T M L :   f a l s e , 
 	 	 	 / /   i n d e n t a t i o n   u n i t 
 	 	 	 i n d e n t C h a r :   "     " , 
 	 	 	 / /   i f   t r u e ,   i t e m s   i n   a   c o l l e c t i o n ,   a r e   s e p a r a t e d   b y   a   \ n ,   e l s e   j u s t   a   s p a c e . 
 	 	 	 m u l t i l i n e :   t r u e 
 	 	 } ; 
 
 	 r e t u r n   j s D u m p ; 
 } ( ) ) ; 
 
 / * 
   *   J a v a s c r i p t   D i f f   A l g o r i t h m 
   *     B y   J o h n   R e s i g   ( h t t p : / / e j o h n . o r g / ) 
   *     M o d i f i e d   b y   C h u   A l a n   " s p r i t e " 
   * 
   *   R e l e a s e d   u n d e r   t h e   M I T   l i c e n s e . 
   * 
   *   M o r e   I n f o : 
   *     h t t p : / / e j o h n . o r g / p r o j e c t s / j a v a s c r i p t - d i f f - a l g o r i t h m / 
   * 
   *   U s a g e :   Q U n i t . d i f f ( e x p e c t e d ,   a c t u a l ) 
   * 
   *   Q U n i t . d i f f (   " t h e   q u i c k   b r o w n   f o x   j u m p e d   o v e r " ,   " t h e   q u i c k   f o x   j u m p s   o v e r "   )   = =   " t h e     q u i c k   < d e l > b r o w n   < / d e l >   f o x   < d e l > j u m p e d   < / d e l > < i n s > j u m p s   < / i n s >   o v e r " 
   * / 
 Q U n i t . d i f f   =   ( f u n c t i o n ( )   { 
 	 / * j s h i n t   e q e q e q : f a l s e ,   e q n u l l : t r u e   * / 
 	 f u n c t i o n   d i f f (   o ,   n   )   { 
 	 	 v a r   i , 
 	 	 	 n s   =   { } , 
 	 	 	 o s   =   { } ; 
 
 	 	 f o r   (   i   =   0 ;   i   <   n . l e n g t h ;   i + +   )   { 
 	 	 	 i f   (   ! h a s O w n . c a l l (   n s ,   n [ i ]   )   )   { 
 	 	 	 	 n s [   n [ i ]   ]   =   { 
 	 	 	 	 	 r o w s :   [ ] , 
 	 	 	 	 	 o :   n u l l 
 	 	 	 	 } ; 
 	 	 	 } 
 	 	 	 n s [   n [ i ]   ] . r o w s . p u s h (   i   ) ; 
 	 	 } 
 
 	 	 f o r   (   i   =   0 ;   i   <   o . l e n g t h ;   i + +   )   { 
 	 	 	 i f   (   ! h a s O w n . c a l l (   o s ,   o [ i ]   )   )   { 
 	 	 	 	 o s [   o [ i ]   ]   =   { 
 	 	 	 	 	 r o w s :   [ ] , 
 	 	 	 	 	 n :   n u l l 
 	 	 	 	 } ; 
 	 	 	 } 
 	 	 	 o s [   o [ i ]   ] . r o w s . p u s h (   i   ) ; 
 	 	 } 
 
 	 	 f o r   (   i   i n   n s   )   { 
 	 	 	 i f   (   h a s O w n . c a l l (   n s ,   i   )   )   { 
 	 	 	 	 i f   (   n s [ i ] . r o w s . l e n g t h   = = =   1   & &   h a s O w n . c a l l (   o s ,   i   )   & &   o s [ i ] . r o w s . l e n g t h   = = =   1   )   { 
 	 	 	 	 	 n [   n s [ i ] . r o w s [ 0 ]   ]   =   { 
 	 	 	 	 	 	 t e x t :   n [   n s [ i ] . r o w s [ 0 ]   ] , 
 	 	 	 	 	 	 r o w :   o s [ i ] . r o w s [ 0 ] 
 	 	 	 	 	 } ; 
 	 	 	 	 	 o [   o s [ i ] . r o w s [ 0 ]   ]   =   { 
 	 	 	 	 	 	 t e x t :   o [   o s [ i ] . r o w s [ 0 ]   ] , 
 	 	 	 	 	 	 r o w :   n s [ i ] . r o w s [ 0 ] 
 	 	 	 	 	 } ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } 
 
 	 	 f o r   (   i   =   0 ;   i   <   n . l e n g t h   -   1 ;   i + +   )   { 
 	 	 	 i f   (   n [ i ] . t e x t   ! =   n u l l   & &   n [   i   +   1   ] . t e x t   = =   n u l l   & &   n [ i ] . r o w   +   1   <   o . l e n g t h   & &   o [   n [ i ] . r o w   +   1   ] . t e x t   = =   n u l l   & & 
 	 	 	 	 	 	 n [   i   +   1   ]   = =   o [   n [ i ] . r o w   +   1   ]   )   { 
 
 	 	 	 	 n [   i   +   1   ]   =   { 
 	 	 	 	 	 t e x t :   n [   i   +   1   ] , 
 	 	 	 	 	 r o w :   n [ i ] . r o w   +   1 
 	 	 	 	 } ; 
 	 	 	 	 o [   n [ i ] . r o w   +   1   ]   =   { 
 	 	 	 	 	 t e x t :   o [   n [ i ] . r o w   +   1   ] , 
 	 	 	 	 	 r o w :   i   +   1 
 	 	 	 	 } ; 
 	 	 	 } 
 	 	 } 
 
 	 	 f o r   (   i   =   n . l e n g t h   -   1 ;   i   >   0 ;   i - -   )   { 
 	 	 	 i f   (   n [ i ] . t e x t   ! =   n u l l   & &   n [   i   -   1   ] . t e x t   = =   n u l l   & &   n [ i ] . r o w   >   0   & &   o [   n [ i ] . r o w   -   1   ] . t e x t   = =   n u l l   & & 
 	 	 	 	 	 	 n [   i   -   1   ]   = =   o [   n [ i ] . r o w   -   1   ] )   { 
 
 	 	 	 	 n [   i   -   1   ]   =   { 
 	 	 	 	 	 t e x t :   n [   i   -   1   ] , 
 	 	 	 	 	 r o w :   n [ i ] . r o w   -   1 
 	 	 	 	 } ; 
 	 	 	 	 o [   n [ i ] . r o w   -   1   ]   =   { 
 	 	 	 	 	 t e x t :   o [   n [ i ] . r o w   -   1   ] , 
 	 	 	 	 	 r o w :   i   -   1 
 	 	 	 	 } ; 
 	 	 	 } 
 	 	 } 
 
 	 	 r e t u r n   { 
 	 	 	 o :   o , 
 	 	 	 n :   n 
 	 	 } ; 
 	 } 
 
 	 r e t u r n   f u n c t i o n (   o ,   n   )   { 
 	 	 o   =   o . r e p l a c e (   / \ s + $ / ,   " "   ) ; 
 	 	 n   =   n . r e p l a c e (   / \ s + $ / ,   " "   ) ; 
 
 	 	 v a r   i ,   p r e , 
 	 	 	 s t r   =   " " , 
 	 	 	 o u t   =   d i f f (   o   = = =   " "   ?   [ ]   :   o . s p l i t ( / \ s + / ) ,   n   = = =   " "   ?   [ ]   :   n . s p l i t ( / \ s + / )   ) , 
 	 	 	 o S p a c e   =   o . m a t c h ( / \ s + / g ) , 
 	 	 	 n S p a c e   =   n . m a t c h ( / \ s + / g ) ; 
 
 	 	 i f   (   o S p a c e   = =   n u l l   )   { 
 	 	 	 o S p a c e   =   [   "   "   ] ; 
 	 	 } 
 	 	 e l s e   { 
 	 	 	 o S p a c e . p u s h (   "   "   ) ; 
 	 	 } 
 
 	 	 i f   (   n S p a c e   = =   n u l l   )   { 
 	 	 	 n S p a c e   =   [   "   "   ] ; 
 	 	 } 
 	 	 e l s e   { 
 	 	 	 n S p a c e . p u s h (   "   "   ) ; 
 	 	 } 
 
 	 	 i f   (   o u t . n . l e n g t h   = = =   0   )   { 
 	 	 	 f o r   (   i   =   0 ;   i   <   o u t . o . l e n g t h ;   i + +   )   { 
 	 	 	 	 s t r   + =   " < d e l > "   +   o u t . o [ i ]   +   o S p a c e [ i ]   +   " < / d e l > " ; 
 	 	 	 } 
 	 	 } 
 	 	 e l s e   { 
 	 	 	 i f   (   o u t . n [ 0 ] . t e x t   = =   n u l l   )   { 
 	 	 	 	 f o r   (   n   =   0 ;   n   <   o u t . o . l e n g t h   & &   o u t . o [ n ] . t e x t   = =   n u l l ;   n + +   )   { 
 	 	 	 	 	 s t r   + =   " < d e l > "   +   o u t . o [ n ]   +   o S p a c e [ n ]   +   " < / d e l > " ; 
 	 	 	 	 } 
 	 	 	 } 
 
 	 	 	 f o r   (   i   =   0 ;   i   <   o u t . n . l e n g t h ;   i + +   )   { 
 	 	 	 	 i f   ( o u t . n [ i ] . t e x t   = =   n u l l )   { 
 	 	 	 	 	 s t r   + =   " < i n s > "   +   o u t . n [ i ]   +   n S p a c e [ i ]   +   " < / i n s > " ; 
 	 	 	 	 } 
 	 	 	 	 e l s e   { 
 	 	 	 	 	 / /   ` p r e `   i n i t i a l i z e d   a t   t o p   o f   s c o p e 
 	 	 	 	 	 p r e   =   " " ; 
 
 	 	 	 	 	 f o r   (   n   =   o u t . n [ i ] . r o w   +   1 ;   n   <   o u t . o . l e n g t h   & &   o u t . o [ n ] . t e x t   = =   n u l l ;   n + +   )   { 
 	 	 	 	 	 	 p r e   + =   " < d e l > "   +   o u t . o [ n ]   +   o S p a c e [ n ]   +   " < / d e l > " ; 
 	 	 	 	 	 } 
 	 	 	 	 	 s t r   + =   "   "   +   o u t . n [ i ] . t e x t   +   n S p a c e [ i ]   +   p r e ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } 
 
 	 	 r e t u r n   s t r ; 
 	 } ; 
 } ( ) ) ; 
 
 / /   F o r   b r o w s e r ,   e x p o r t   o n l y   s e l e c t   g l o b a l s 
 i f   (   t y p e o f   w i n d o w   ! = =   " u n d e f i n e d "   )   { 
 	 e x t e n d (   w i n d o w ,   Q U n i t . c o n s t r u c t o r . p r o t o t y p e   ) ; 
 	 w i n d o w . Q U n i t   =   Q U n i t ; 
 } 
 
 / /   F o r   C o m m o n J S   e n v i r o n m e n t s ,   e x p o r t   e v e r y t h i n g 
 i f   (   t y p e o f   m o d u l e   ! = =   " u n d e f i n e d "   & &   m o d u l e . e x p o r t s   )   { 
 	 m o d u l e . e x p o r t s   =   Q U n i t ; 
 } 
 
 
 / /   G e t   a   r e f e r e n c e   t o   t h e   g l o b a l   o b j e c t ,   l i k e   w i n d o w   i n   b r o w s e r s 
 } (   ( f u n c t i o n ( )   { 
 	 r e t u r n   t h i s ; 
 } ) ( )   ) ) ; 
 
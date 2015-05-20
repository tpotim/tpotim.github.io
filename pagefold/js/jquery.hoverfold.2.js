( function( $ ) {
  
  $.fn.hoverfold = function( args ) {

    this.each( function() {
    
      $( this ).children( '.view' ).each( function() {
      
        var $item   = $( this ),
          //img   = $item.children( 'img' ).attr( 'src' ),
           //$content = $item.find('.content'),
           ct = '<div class="content">CSS 3D transforms nsitions are</div>',
          struct  = '<div class="slice s1">' + ct ;
            struct  +='<div class="slice s2">' + ct ;
              struct  +='<div class="slice s3">' + ct ;
                struct  +='<div class="slice s4">' + ct ;
                  struct  +='<div class="slice s5">' + ct ;
                  struct  +='</div>';
                struct  +='</div>';
              struct  +='</div>';
            struct  +='</div>';
          struct  +='</div>';
          
        var $struct = $( struct );
        $item.append($struct);
        
        //$item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
        
      } );
      
    });

  };

} )( jQuery );
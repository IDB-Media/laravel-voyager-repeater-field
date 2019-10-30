    $(document).ready(function () {     
      var postURL = "<?php echo url('addmore'); ?>";
      var i=1;  


      $('#add').click(function(){  
           i++;  
           $('#dynamic_field').append('<li id="row'+i+'" class="dynamic-added list-group-item"><div class="control-group"><input type="text" name="stripe_plan_features[]" placeholder="Enter your feature" class="form-control name_list" /><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></div></li>');  
      });  


      $(document).on('click', '.btn_remove', function(){  
           var button_id = $(this).attr("id");   
           $('#row'+button_id+'').remove(); 
          $(button_id).remove(); 
      });  
    });
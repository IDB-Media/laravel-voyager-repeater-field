## Laravel Voyager Repeater Field

This repeater field is for use with Laravel Voyager.
See the original documentation here [Add A Custom Form To Voyager](https://voyager-docs.devdojo.com/customization/adding-custom-formfields) to add your form field to Voyager.


### Use

Add a new class to Laravel. 

In this example we create our own FormFields folder in /App/ and place the class in it.

```
<?php

namespace App\FormFields;

use TCG\Voyager\FormFields\AbstractHandler;

class StripePlansFormField extends AbstractHandler
{
    protected $codename = 'plan_features';

    public function createContent($row, $dataType, $dataTypeContent, $options)
    {
        return view('formfields.plan_features', [
            'row' => $row,
            'options' => $options,
            'dataType' => $dataType,
            'dataTypeContent' => $dataTypeContent
        ]);
    }
}

```
Next, create the view specified above.

In the view you can add whatever logic you want.

Next we tell Voyager that we have a new form field. We will do this in a service provider (in the example below we use the AppServiceProvider.

```
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use TCG\Voyager\Facades\Voyager;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
       Voyager::addFormField(\App\FormFields\StripePlansFormField::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

```


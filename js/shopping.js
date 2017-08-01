  $(document).ready(function(){
    var items =[
  'leche',
  'queso',
  'yogurth',
  'manzanas',
  'jamon',
  'papas',
  'arroz',
  'jugo',
  'pasta de dientes',
  'azucar',
  'bolsas',
  'pasta',
  'refresco',
  ];
  items.push('chocomilk');
  items [items.length]='agua de litro';
  items [items.length -1]='agua de 1l.';

  console.info(items)

  document
  .querySelector('#items li:nth-child(1)')
  .innerhtml=items[0];

  $('#items').eq(1).html(items[1]);

  var  total_items= items.length,
  i=0;

  for(i=0; i<=total_items;i++){
    $('#items li').eq(i).html(items[i]);
  


  }



  });

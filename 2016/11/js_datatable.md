> jquery datatable

使用jquery开发的table插件, 基本特性有开源、功能强大(宽度自适应, 列排序, 实时搜索, 分页), 支持json格式的表格数据;
使用也很简单：

> 引入jqueyr及datatable bootstrap 样式文件

``` html
<link rel="stylesheet" href="./publics/libs/datatable/css/dataTables.bootstrap.min.css">
<script type="text/javascript" src="./publics/libs/jquery/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="./publics/libs/datatable/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" src="./publics/libs/datatable/js/jquery.dataTables.min.js"></script>
```

> html 中定义table元素

``` html
	<table id="table_id_example" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
      <tr>
      <!-- <th>序号</th> -->
        <th>名称</th>
        <th>营业总数/笔</th>
        <th>营业总额/元</th>
        <th>日均营业额/元</th>
        <th>总里程/km</th>
      	<th>单笔平均里程/km</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
	</table>
```

> js 代码

``` js
 $('#table_id_example').DataTable({
		info: false,
		autoWidth: true,
		retrieve: true,
		destroy: true,
		data: [ 
			{data: 'taxi_no', width: '12%'},
			{data: 'price'},
			{data: 'distance', width: '15%'},
			{data: 'task_amount', width: '15%'},
			{data: 'taxi_company', width: '30%'},
			{data: 'taxi_type'},
			{data: 'taskTime', width: '10%'}
	  ],
		columns: [ 
			{data: 'taxi_no', width: '12%'},
			{data: 'price'},
			{data: 'distance', width: '15%'},
			{data: 'task_amount', width: '15%'},
			{data: 'taxi_company', width: '30%'},
			{data: 'taxi_type'},
			{data: 'taskTime', width: '10%'}
	  ]
	});
```
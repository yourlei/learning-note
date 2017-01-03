<!-- 调用方式 -->
kmeans( rel_source,
        expr_point,
        initial_centroids,
        fn_dist,
        agg_centroid,
        max_num_iterations,
        min_frac_reassigned
      )
kmeans (
		表名(数据源),
		column (进行聚类的数据),
		初始中心点(质心),
		计算方式(),
		[],
		[迭代次数],
		[精度]
)
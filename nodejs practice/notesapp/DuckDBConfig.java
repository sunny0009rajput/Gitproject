@Configuration


    public class DuckDBConfig {


        private final Logger log = LoggerFactory.getLogger(this.getClass().getName());


        @Value("${duckdb.s3.url.style}")
        private String s3UrlStyle;

        @Value("${duckdb.s3.endpoint}")
        private String s3Endpoint;

        @Value("${minio.usr}")
        private String s3AccessKeyId;

        @Value("${minio.pwd}")
        private String s3SecretAccesskey; 

        @Value("${spring.datasource.url}")
        private String datasourceUrl;

        @Value("${spring.datasource.username}")
        private String datasourceUserName;
docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testprojpepe/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testprojpepe/app ../..

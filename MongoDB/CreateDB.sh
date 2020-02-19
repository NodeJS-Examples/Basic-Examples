mkdir -p ../data
echo 'mongod --dbpath=/data --nojournal' > ../mongod
chmod a+x mongod
sudo cp mongodb-org-3.6.repo /etc/yum.repos.d
sudo yum install -y mongodb-org

#To create a DB, run: mongod --dbpath=data --nojournal
#You will need to have a directory "data" for the above example
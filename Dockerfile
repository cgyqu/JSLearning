FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
ENV ASPNETCORE_URLS http://0.0.0.0:3000/
EXPOSE 3000
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "JsLearning.dll"]